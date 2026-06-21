import { FleetNode, Region, City, Depot, Vehicle, Status } from '../models/fleet.model';

export function generateRegion1(): Region {
    return {
        id: '1',
        name: 'North America',
        type: 'REGION',
        children: [
            {
                id: '11',
                name: 'Detroit',
                type: 'CITY',
                children: [{
                    id: '111',
                    name: 'Flint',
                    type: 'DEPOT',
                    children: [
                        {
                            id: '1111',
                            name: 'Honda Civic',
                            type: 'VEHICLE',
                            status: Status.ACTIVE,
                            battery: 20
                        },
                        {
                            id: '1112',
                            name: 'Honda CRV',
                            type: 'VEHICLE',
                            status: Status.IN_USE,
                            battery: 100
                        },
                        {
                            id: '1113',
                            name: 'Honda HRV',
                            type: 'VEHICLE',
                            status: Status.OUT_OF_SERVICE,
                            battery: 0
                        }
                    ]
                }]
            },
            {
                id: '12',
                name: 'Boston',
                type: 'CITY',
                children: [{
                    id: '121',
                    name: 'Quincy',
                    type: 'DEPOT',
                    children: [
                        {
                            id: '1211',
                            name: 'Honda Civic',
                            type: 'VEHICLE',
                            status: Status.ACTIVE,
                            battery: 20
                        },
                        {
                            id: '1212',
                            name: 'Honda CRV',
                            type: 'VEHICLE',
                            status: Status.IN_USE,
                            battery: 100
                        },
                        {
                            id: '1213',
                            name: 'Honda HRV',
                            type: 'VEHICLE',
                            status: Status.OUT_OF_SERVICE,
                            battery: 0
                        }
                    ]
                }]
            }
        ]
    }
}

export function generateRegion2(): Region {
    return {
        id: '2',
        name: 'South America',
        type: 'REGION',
        children: [
            {
                id: '21',
                name: 'Detroit',
                type: 'CITY',
                children: [{
                    id: '211',
                    name: 'Flint',
                    type: 'DEPOT',
                    children: [
                        {
                            id: '2111',
                            name: 'Honda Civic',
                            type: 'VEHICLE',
                            status: Status.ACTIVE,
                            battery: 20
                        },
                        {
                            id: '2112',
                            name: 'Honda CRV',
                            type: 'VEHICLE',
                            status: Status.IN_USE,
                            battery: 0
                        },
                        {
                            id: '2113',
                            name: 'Honda HRV',
                            type: 'VEHICLE',
                            status: Status.OUT_OF_SERVICE,
                            battery: 0
                        }
                    ]
                }]
            },
            {
                id: '22',
                name: 'Boston',
                type: 'CITY',
                children: [{
                    id: '221',
                    name: 'Quincy',
                    type: 'DEPOT',
                    children: [
                        {
                            id: '2211',
                            name: 'Honda Civic',
                            type: 'VEHICLE',
                            status: Status.ACTIVE,
                            battery: 20
                        },
                        {
                            id: '2212',
                            name: 'Honda CRV',
                            type: 'VEHICLE',
                            status: Status.IN_USE,
                            battery: 100
                        },
                        {
                            id: '2213',
                            name: 'Honda CRV',
                            type: 'VEHICLE',
                            status: Status.OUT_OF_SERVICE,
                            battery: 0
                        }
                    ]
                }]
            }
        ]
    }
}