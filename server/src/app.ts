import * as express from 'express';
import * as bodyParser from 'body-parser';
import busesRoute from './routes/buses';
import busStopsRoute from './routes/busStops';
import busRoutes from './routes/busRoutes';
import {Buses} from './models/buses';
import {BusStops} from './models/busStops';
import {IBusStop} from './models/busStop';
import * as cors from 'cors';
import * as logger from 'morgan';
import {Utils} from './utils/utils';
import RouteError = Utils.routes.RouteError;
import {Bus} from './models/bus';
import moment = require('moment');

const corsOptions: cors.CorsOptions = {
    allowedHeaders: ['Origin'],
    credentials: true,
    methods: 'GET,PUT,POST',
    origin: '*',
    preflightContinue: true
};

export const app = express();

const data: { busStops: IBusStop[] } = require('./data/busStops.json');

export const busStops = new BusStops(data.busStops);
export const buses = new Buses(busStops);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // keep this if your api accepts cross-origin requests
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token");
    next();
});

app.use('/api', (req, res, next) => {
    res.redirect(req.url.replace('/api', ''));
});

app.locals.buses = buses;
app.locals.busStops = busStops;

app.use(bodyParser.json());
app.use(cors(corsOptions));
//app.use(logger('dev'));

app.use('/buses', busesRoute);
app.use('/busStops', busStopsRoute);
app.use('/busRoutes', busRoutes);
app.use('*', (err, req, res, next) => {
    if (err instanceof RouteError) {
        res.status(err.statusCode);
        res.json(err.getResponse());
    } else {
        next();
    }
});

setInterval((() => {
    const now = moment().unix() * 1000;
    const acceptableTime = now - (5 * 1000);
    app.locals.buses.buses.forEach((bus: Bus) => {
        if (bus.latestMovementDate < acceptableTime) {
            console.log('removing old bus');
            app.locals.buses.removeBus(bus.id);
        }
    });
}), 1000);