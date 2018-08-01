export interface ICentreDeFormation {
    id?: number;
    iDCentre?: number;
    nomCentre?: string;
    adresse?: string;
}

export class CentreDeFormation implements ICentreDeFormation {
    constructor(public id?: number, public iDCentre?: number, public nomCentre?: string, public adresse?: string) {}
}
