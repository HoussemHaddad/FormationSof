import { IReservation } from 'app/shared/model//reservation.model';

export interface IAutresInformations {
    id?: number;
    iDInfo?: number;
    nomInfo?: string;
    contenuInfo?: string;
    reservation?: IReservation;
}

export class AutresInformations implements IAutresInformations {
    constructor(
        public id?: number,
        public iDInfo?: number,
        public nomInfo?: string,
        public contenuInfo?: string,
        public reservation?: IReservation
    ) {}
}
