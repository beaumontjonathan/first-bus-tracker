import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Location} from '../bus/bus';
import {HOST} from '../../app/main';

/*
  Generated class for the BusRouteProvider provider.
*/
@Injectable()
export class BusRouteProvider {

  private sections: Section[];
  private busRoutes: BusRoute[];
  private hasReceivedData: boolean;

  constructor(public http: HttpClient) {
    this.hasReceivedData = false;
  }

  public getBusRoutes(): Promise<BusRoute[]> {
    return new Promise<BusRoute[]>((resolve, reject) => {
      this.ensureHasData()
        .then(() => {
          resolve(this.busRoutes);
        })
        .catch(err => {
          //console.log("Error in getBusRoutes", err);
          reject(err);
        });
    });
  }

  public getSections(): Promise<Section[]> {
    return new Promise<Section[]>((resolve, reject) => {
      this.ensureHasData()
        .then(() => {
          resolve(this.sections);
        })
        .catch(err => {
          console.log("Error in getSections", err);
          reject(err);
        });
    });
  }

  private ensureHasData(): Promise<void> {
    if (this.hasReceivedData) {
      return new Promise<void>(resolve => resolve());
    } else {
      return this.updateDataFromServer();
    }
  }

  private updateDataFromServer(): Promise<void> {
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${HOST}/busRoutes`).toPromise().then(data => {
        const body = data as any;
        if (body.status === 'success') {
          this.sections = body.data.sections;
          this.busRoutes = body.data.busRoutes;
          this.hasReceivedData = true;
          resolve();
        } else {
          reject();
        }
      }).catch(error => {
        //console.log("error in updateDataFromServer", error);
        reject(/*error*/);
      });
    });
  }
}

export interface BusRoute {
  busRouteName: string;
  sectionsUsed: number[];
  order: number[]
}

export interface Section {
  sectionId: number;
  sectionDescription: string;
  positions: Location[]
}
