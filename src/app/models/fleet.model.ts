export type FleetNode = Region | City | Depot | Vehicle;

export interface Region {
    id: string;
    name: string;
    type: 'REGION';
    children: FleetNode[];
}

export interface City {
    id: string;
    name: string;
    type: 'CITY';
    children: FleetNode[];
}

export interface Depot {
    id: string;
    name: string;
    type: 'DEPOT';
    children: Vehicle[];
}

export interface Vehicle {
    id: string;
    name: string;
    type: 'VEHICLE';
    status: Status;
    battery: number;
}

export enum Status {
    ACTIVE = "ACTIVE",
    OUT_OF_SERVICE = "OUT_OF_SERVICE",
    MAINTENANCE = "MAINTENANCE",
    IN_USE = "IN_USE"
}