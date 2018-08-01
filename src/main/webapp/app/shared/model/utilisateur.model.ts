export interface IUtilisateur {
    id?: number;
    iDuser?: number;
}

export class Utilisateur implements IUtilisateur {
    constructor(public id?: number, public iDuser?: number) {}
}
