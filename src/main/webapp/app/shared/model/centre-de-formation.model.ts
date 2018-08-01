import { IFormation } from 'app/shared/model//formation.model';

export interface ICentreDeFormation {
    id?: number;
    iDCentre?: number;
    nomCentre?: string;
    adresse?: string;
    formations?: IFormation[];
}

export class CentreDeFormation implements ICentreDeFormation {
    constructor(
        public id?: number,
        public iDCentre?: number,
        public nomCentre?: string,
        public adresse?: string,
        public formations?: IFormation[]
    ) {}
}
