import { IUtilisateur } from 'app/shared/model//utilisateur.model';

export interface IRole {
    id?: number;
    iDRole?: number;
    nomRole?: string;
    utilisateurs?: IUtilisateur[];
}

export class Role implements IRole {
    constructor(public id?: number, public iDRole?: number, public nomRole?: string, public utilisateurs?: IUtilisateur[]) {}
}
