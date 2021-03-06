import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServerProvider } from './server-provider';
describe('ServerProvider', function () {
    var injector;
    var service;
    var httpMock;
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ServerProvider]
        });
        injector = getTestBed();
        service = injector.get(ServerProvider);
        httpMock = injector.get(HttpTestingController);
    });
    afterEach(function () {
        httpMock.verify();
    });
    describe('#getAllBuses', function () {
        it('Should return all data for each bus running', function () {
            var dummyData = [
                {
                    'busId': 1,
                    'location': {
                        'latitude': 53.003444,
                        'longitude': -2.273507
                    },
                    'routeName': 'U2'
                },
                {
                    'busId': 2,
                    'location': {
                        'latitude': 53.9643824,
                        'longitude': -2.295362
                    },
                    'routeName': 'U2'
                },
                {
                    'busId': 3,
                    'location': {
                        'latitude': 53.837285,
                        'longitude': -2.276247
                    },
                    'routeName': 'U1X'
                }
            ];
            var req = httpMock.expectOne('http://localhost:8080/buses');
            expect(req.request.method).toBe('GET');
            req.flush(dummyData);
        });
    });
    describe('#getAllBuseStops', function () {
        it('Should return all data for each bus stop', function () {
            var dummyData = [
                {
                    "busStopName": "Arrivals Square (Stop C)",
                    "location": {
                        "latitude": 51.378845,
                        "longitude": -2.324927
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 1
                        }
                    ]
                },
                {
                    "busStopName": "The Avenue (Southbound)",
                    "location": {
                        "latitude": 51.3760679,
                        "longitude": -2.3243903
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 2
                        },
                        {
                            "name": "U1X",
                            "position": 2
                        },
                        {
                            "name": "U2",
                            "position": 2
                        }
                    ]
                },
                {
                    "busStopName": "Rainbow Wood Farm",
                    "location": {
                        "latitude": 51.3725468,
                        "longitude": -2.3224108
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 3
                        }
                    ]
                },
                {
                    "busStopName": "Brassknocker Hill",
                    "location": {
                        "latitude": 51.365948,
                        "longitude": -2.3197219
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 4
                        }
                    ]
                },
                {
                    "busStopName": "Flatwoods Road",
                    "location": {
                        "latitude": 51.3653829,
                        "longitude": -2.3218583
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 5
                        }
                    ]
                },
                {
                    "busStopName": "Ralph Allen School",
                    "location": {
                        "latitude": 51.3637848,
                        "longitude": -2.3310113
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 6
                        }
                    ]
                },
                {
                    "busStopName": "Shaft Road",
                    "location": {
                        "latitude": 51.3629001,
                        "longitude": -2.3390767
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 7
                        }
                    ]
                },
                {
                    "busStopName": "Tyning Road",
                    "location": {
                        "latitude": 51.362556,
                        "longitude": -2.3423349
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 8
                        }
                    ]
                },
                {
                    "busStopName": "Hadley Arms",
                    "location": {
                        "latitude": 51.3620745,
                        "longitude": -2.3461718
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 9
                        }
                    ]
                },
                {
                    "busStopName": "The Firs",
                    "location": {
                        "latitude": 51.3611789,
                        "longitude": -2.348787
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 10
                        }
                    ]
                },
                {
                    "busStopName": "Combe Road",
                    "location": {
                        "latitude": 51.3604349,
                        "longitude": -2.3510937
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 11
                        }
                    ]
                },
                {
                    "busStopName": "Mulberry Park",
                    "location": {
                        "latitude": 51.3600254,
                        "longitude": -2.3529625
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 12
                        }
                    ]
                },
                {
                    "busStopName": "Foxhill House",
                    "location": {
                        "latitude": 51.3591582,
                        "longitude": -2.3573459
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 13
                        }
                    ]
                },
                {
                    "busStopName": "Bradford Road Shops",
                    "location": {
                        "latitude": 51.3589099,
                        "longitude": -2.3592979
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 14
                        }
                    ]
                },
                {
                    "busStopName": "Entry Hill",
                    "location": {
                        "latitude": 51.358376,
                        "longitude": -2.3629121
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 15
                        }
                    ]
                },
                {
                    "busStopName": "Sainsbury's",
                    "location": {
                        "latitude": 51.356926,
                        "longitude": -2.3716468
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 16
                        }
                    ]
                },
                {
                    "busStopName": "Fosseway School",
                    "location": {
                        "latitude": 51.358173,
                        "longitude": -2.3752047
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 17
                        }
                    ]
                },
                {
                    "busStopName": "Red Lion",
                    "location": {
                        "latitude": 51.358837,
                        "longitude": -2.3764881
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 18
                        }
                    ]
                },
                {
                    "busStopName": "Noads Corner",
                    "location": {
                        "latitude": 51.360344,
                        "longitude": -2.3798181
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 19
                        }
                    ]
                },
                {
                    "busStopName": "Barrow Road",
                    "location": {
                        "latitude": 51.3615302,
                        "longitude": -2.3830448
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 20
                        }
                    ]
                },
                {
                    "busStopName": "Somerdale View",
                    "location": {
                        "latitude": 51.3621745,
                        "longitude": -2.3851631
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 21
                        }
                    ]
                },
                {
                    "busStopName": "Bath Community Academy",
                    "location": {
                        "latitude": 51.3644329,
                        "longitude": -2.39199
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 22
                        }
                    ]
                },
                {
                    "busStopName": "Padleigh Turn",
                    "location": {
                        "latitude": 51.3661729,
                        "longitude": -2.3928671
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 23
                        }
                    ]
                },
                {
                    "busStopName": "Southdown Road",
                    "location": {
                        "latitude": 51.3671529,
                        "longitude": -2.3904759
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 24
                        }
                    ]
                },
                {
                    "busStopName": "Sladebrook Court",
                    "location": {
                        "latitude": 51.3682598,
                        "longitude": -2.3874892
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 25
                        }
                    ]
                },
                {
                    "busStopName": "Trowbridge House",
                    "location": {
                        "latitude": 51.370792,
                        "longitude": -2.3858812
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 26
                        }
                    ]
                },
                {
                    "busStopName": "Happy Garden",
                    "location": {
                        "latitude": 51.3724062,
                        "longitude": -2.3846602
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 27
                        }
                    ]
                },
                {
                    "busStopName": "Ascension Church",
                    "location": {
                        "latitude": 51.3744351,
                        "longitude": -2.3828658
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 28
                        }
                    ]
                },
                {
                    "busStopName": "Bridge Road",
                    "location": {
                        "latitude": 51.3758088,
                        "longitude": -2.3827203
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 29
                        }
                    ]
                },
                {
                    "busStopName": "Mayfield Road",
                    "location": {
                        "latitude": 51.3759691,
                        "longitude": -2.381471
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 30
                        }
                    ]
                },
                {
                    "busStopName": "Moorland Road",
                    "location": {
                        "latitude": 51.3774219,
                        "longitude": -2.3787238
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 31
                        }
                    ]
                },
                {
                    "busStopName": "Arlington Road",
                    "location": {
                        "latitude": 51.3781929,
                        "longitude": -2.3772372
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 32
                        }
                    ]
                },
                {
                    "busStopName": "Brougham Hayes",
                    "location": {
                        "latitude": 51.3810272,
                        "longitude": -2.3736249
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 17
                        },
                        {
                            "name": "U1X",
                            "position": 18
                        },
                        {
                            "name": "U2",
                            "position": 33
                        }
                    ]
                },
                {
                    "busStopName": "Pines Way",
                    "location": {
                        "latitude": 51.3806422,
                        "longitude": -2.3709923
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 18
                        },
                        {
                            "name": "U1X",
                            "position": 19
                        },
                        {
                            "name": "U2",
                            "position": 34
                        }
                    ]
                },
                {
                    "busStopName": "Riverside Road",
                    "location": {
                        "latitude": 51.378719,
                        "longitude": -2.3675711
                    },
                    "routes": [
                        {
                            "name": "U1X",
                            "position": 20
                        },
                        {
                            "name": "U2",
                            "position": 35
                        }
                    ]
                },
                {
                    "busStopName": "Oak Street (Eastbound)",
                    "location": {
                        "latitude": 51.3784901,
                        "longitude": -2.3654998
                    },
                    "routes": [
                        {
                            "name": "U1X",
                            "position": 21
                        },
                        {
                            "name": "U2",
                            "position": 36
                        }
                    ]
                },
                {
                    "busStopName": "Rossiter Road",
                    "location": {
                        "latitude": 51.3770055,
                        "longitude": -2.3578025
                    },
                    "routes": [
                        {
                            "name": "U1X",
                            "position": 22
                        },
                        {
                            "name": "U2",
                            "position": 37
                        }
                    ]
                },
                {
                    "busStopName": "Pulteney Court (Northbound)",
                    "location": {
                        "latitude": 51.3781389,
                        "longitude": -2.3514739
                    },
                    "routes": [
                        {
                            "name": "U1X",
                            "position": 23
                        },
                        {
                            "name": "U2",
                            "position": 38
                        }
                    ]
                },
                {
                    "busStopName": "Pulteney Gardens (Northbound)",
                    "location": {
                        "latitude": 51.3799901,
                        "longitude": -2.3513163
                    },
                    "routes": [
                        {
                            "name": "U1X",
                            "position": 24
                        },
                        {
                            "name": "U2",
                            "position": 39
                        }
                    ]
                },
                {
                    "busStopName": "St Mary's Church",
                    "location": {
                        "latitude": 51.3839299,
                        "longitude": -2.3509153
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 24
                        },
                        {
                            "name": "U1X",
                            "position": 25
                        },
                        {
                            "name": "U2",
                            "position": 40
                        }
                    ]
                },
                {
                    "busStopName": "Sydney Buildings",
                    "location": {
                        "latitude": 51.3826899,
                        "longitude": -2.3481607
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 25
                        },
                        {
                            "name": "U1X",
                            "position": 26
                        },
                        {
                            "name": "U2",
                            "position": 41
                        }
                    ]
                },
                {
                    "busStopName": "Cleveland Walk (Eastbound)",
                    "location": {
                        "latitude": 51.3809891,
                        "longitude": -2.3455328
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 26
                        },
                        {
                            "name": "U1X",
                            "position": 27
                        },
                        {
                            "name": "U2",
                            "position": 42
                        }
                    ]
                },
                {
                    "busStopName": "White Lodge (Eastbound)",
                    "location": {
                        "latitude": 51.379757,
                        "longitude": -2.342693
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 27
                        },
                        {
                            "name": "U1X",
                            "position": 28
                        },
                        {
                            "name": "U2",
                            "position": 43
                        }
                    ]
                },
                {
                    "busStopName": "Youth Hostel (Eastbound)",
                    "location": {
                        "latitude": 51.3785859,
                        "longitude": -2.3399967
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 28
                        },
                        {
                            "name": "U1X",
                            "position": 29
                        },
                        {
                            "name": "U2",
                            "position": 44
                        }
                    ]
                },
                {
                    "busStopName": "Smallcombe House (Eastbound)",
                    "location": {
                        "latitude": 51.3778652,
                        "longitude": -2.3375639
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 29
                        },
                        {
                            "name": "U1X",
                            "position": 30
                        },
                        {
                            "name": "U2",
                            "position": 45
                        }
                    ]
                },
                {
                    "busStopName": "Woodland Place (Eastbound)",
                    "location": {
                        "latitude": 51.3774341,
                        "longitude": -2.333839
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 30
                        },
                        {
                            "name": "U1X",
                            "position": 31
                        },
                        {
                            "name": "U2",
                            "position": 46
                        }
                    ]
                },
                {
                    "busStopName": "North Road (Eastbound)",
                    "location": {
                        "latitude": 51.3766062,
                        "longitude": -2.3315202
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 31
                        },
                        {
                            "name": "U1X",
                            "position": 32
                        },
                        {
                            "name": "U2",
                            "position": 47
                        }
                    ]
                },
                {
                    "busStopName": "Oakley",
                    "location": {
                        "latitude": 51.3742409,
                        "longitude": -2.3281842
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 32
                        },
                        {
                            "name": "U1X",
                            "position": 33
                        },
                        {
                            "name": "U2",
                            "position": 48
                        }
                    ]
                },
                {
                    "busStopName": "The Avenue (Northbound)",
                    "location": {
                        "latitude": 51.375916,
                        "longitude": -2.3247048
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 33
                        },
                        {
                            "name": "U1X",
                            "position": 34
                        },
                        {
                            "name": "U2",
                            "position": 49
                        }
                    ]
                },
                {
                    "busStopName": "Arrivals Square (Stop A)",
                    "location": {
                        "latitude": 51.379070,
                        "longitude": -2.325222
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 1
                        },
                        {
                            "name": "U1X",
                            "position": 1
                        }
                    ]
                },
                {
                    "busStopName": "Oakley",
                    "location": {
                        "latitude": 51.3744091,
                        "longitude": -2.329062
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 3
                        },
                        {
                            "name": "U1X",
                            "position": 3
                        }
                    ]
                },
                {
                    "busStopName": "North Road (Westbound)",
                    "location": {
                        "latitude": 51.3768272,
                        "longitude": -2.3321251
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 4
                        },
                        {
                            "name": "U1X",
                            "position": 4
                        }
                    ]
                },
                {
                    "busStopName": "Woodland Place (Westbound)",
                    "location": {
                        "latitude": 51.3775061,
                        "longitude": -2.3344579
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 5
                        },
                        {
                            "name": "U1X",
                            "position": 5
                        }
                    ]
                },
                {
                    "busStopName": "Smallcombe House (Westbound)",
                    "location": {
                        "latitude": 51.3777919,
                        "longitude": -2.3379649
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 6
                        },
                        {
                            "name": "U1X",
                            "position": 6
                        }
                    ]
                },
                {
                    "busStopName": "Youth Hostel (Westbound)",
                    "location": {
                        "latitude": 51.3786659,
                        "longitude": -2.3403997
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 7
                        },
                        {
                            "name": "U1X",
                            "position": 7
                        }
                    ]
                },
                {
                    "busStopName": "White Lodge (Westbound)",
                    "location": {
                        "latitude": 51.3799131,
                        "longitude": -2.3437002
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 8
                        },
                        {
                            "name": "U1X",
                            "position": 8
                        }
                    ]
                },
                {
                    "busStopName": "Cleveland Walk (Westbound)",
                    "location": {
                        "latitude": 51.3809171,
                        "longitude": -2.3456468
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 9
                        },
                        {
                            "name": "U1X",
                            "position": 9
                        }
                    ]
                },
                {
                    "busStopName": "Raby Gardens",
                    "location": {
                        "latitude": 51.3832779,
                        "longitude": -2.3502488
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 10
                        },
                        {
                            "name": "U1X",
                            "position": 10
                        }
                    ]
                },
                {
                    "busStopName": "Pulteney Gardens (Southbound)",
                    "location": {
                        "latitude": 51.3795619,
                        "longitude": -2.3510829
                    },
                    "routes": [
                        {
                            "name": "U1X",
                            "position": 11
                        }
                    ]
                },
                {
                    "busStopName": "Pulteney Court (Southbound)",
                    "location": {
                        "latitude": 51.3783988,
                        "longitude": -2.3511017
                    },
                    "routes": [
                        {
                            "name": "U1X",
                            "position": 12
                        }
                    ]
                },
                {
                    "busStopName": "Lyncombe Hill",
                    "location": {
                        "latitude": 51.376576,
                        "longitude": -2.3568564
                    },
                    "routes": [
                        {
                            "name": "U1X",
                            "position": 13
                        }
                    ]
                },
                {
                    "busStopName": "Oak Street (Westbound)",
                    "location": {
                        "latitude": 51.3784101,
                        "longitude": -2.3657721
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 13
                        },
                        {
                            "name": "U1X",
                            "position": 14
                        }
                    ]
                },
                {
                    "busStopName": "Cheltenham Street",
                    "location": {
                        "latitude": 51.3783842,
                        "longitude": -2.3685877
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 14
                        },
                        {
                            "name": "U1X",
                            "position": 15
                        }
                    ]
                },
                {
                    "busStopName": "Hayesfield School",
                    "location": {
                        "latitude": 51.377144,
                        "longitude": -2.3709923
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 15
                        },
                        {
                            "name": "U1X",
                            "position": 16
                        }
                    ]
                },
                {
                    "busStopName": "Junction Road",
                    "location": {
                        "latitude": 51.3776212,
                        "longitude": -2.3738978
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 16
                        },
                        {
                            "name": "U1X",
                            "position": 17
                        }
                    ]
                },
                {
                    "busStopName": "North Parade",
                    "location": {
                        "latitude": 51.3807489,
                        "longitude": -2.356322
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 11
                        }
                    ]
                },
                {
                    "busStopName": "Dorchester Street (Westbound)",
                    "location": {
                        "latitude": 51.377869,
                        "longitude": -2.3576939
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 12
                        }
                    ]
                },
                {
                    "busStopName": "Green Park",
                    "location": {
                        "latitude": 51.3805472,
                        "longitude": -2.3662783
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 19
                        }
                    ]
                },
                {
                    "busStopName": "Corn Street",
                    "location": {
                        "latitude": 51.3792108,
                        "longitude": -2.3624307
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 20
                        }
                    ]
                },
                {
                    "busStopName": "Dorchester Street (Eastbound)",
                    "location": {
                        "latitude": 51.3780439,
                        "longitude": -2.359031
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 21
                        }
                    ]
                },
                {
                    "busStopName": "Guildhall",
                    "location": {
                        "latitude": 51.3816805,
                        "longitude": -2.3586655
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 22
                        }
                    ]
                },
                {
                    "busStopName": "The Pavilion",
                    "location": {
                        "latitude": 51.3809008,
                        "longitude": -2.3540957
                    },
                    "routes": [
                        {
                            "name": "U1",
                            "position": 23
                        }
                    ]
                }
            ];
            var req = httpMock.expectOne('http://localhost:8080/buses');
            expect(req.request.method).toBe('GET');
            req.flush(dummyData);
        });
    });
    // This is just updating the location of the bus
    describe('#getBuseOneLocation', function () {
        it('It should return the location of the bus', function () {
            var dummyData = [
                {
                    'location': {
                        'latitude': 53.003444,
                        'longitude': -2.273507
                    },
                },
            ];
            var req = httpMock.expectOne('http://localhost:8080/buses/1/location');
            expect(req.request.method).toBe('GET');
            req.flush(dummyData);
        });
    });
    // This is just the inital request
    describe('#getBuseOneData', function () {
        it("It should return all of bus one's data", function () {
            var dummyData = [
                {
                    'busId': 1,
                    'location': {
                        'latitude': 53.003444,
                        'longitude': -2.273507
                    },
                    'routeName': 'U2',
                    'expectedArrival': 0,
                    'capacity': 'full',
                },
            ];
            var req = httpMock.expectOne('http://localhost:8080/buses/1');
            expect(req.request.method).toBe('GET');
            req.flush(dummyData);
        });
    });
    // This is just the inital request
    describe('#getBrassknockerHillBusStopData', function () {
        it("It should return all of Brassknocker Hill stop's data", function () {
            var dummyData = [
                {
                    "location": {
                        "latitude": 51.365948,
                        "longitude": -2.3197219
                    },
                    "routes": [
                        {
                            "name": "U2",
                            "position": 4
                        }
                    ]
                }
            ];
            var req = httpMock.expectOne('http://localhost:8080/busStops/BH'); // ids for bus stops?
            expect(req.request.method).toBe('GET');
            req.flush(dummyData);
        });
    });
});
//# sourceMappingURL=server-provider.spec.js.map