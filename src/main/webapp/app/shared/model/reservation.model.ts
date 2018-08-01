export interface IReservation {
    id?: number;
}

export class Reservation implements IReservation {
    constructor(public id?: number) {}
}
