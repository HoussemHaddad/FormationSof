export interface IAutresInformations {
    id?: number;
    iDInfo?: number;
    nomInfo?: string;
    contenuInfo?: string;
}

export class AutresInformations implements IAutresInformations {
    constructor(public id?: number, public iDInfo?: number, public nomInfo?: string, public contenuInfo?: string) {}
}
