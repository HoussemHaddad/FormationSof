import { IUtilisateur } from 'app/shared/model//utilisateur.model';

export interface ICommentaire {
    id?: number;
    iDcomm?: number;
    contenu?: string;
    utilisateur?: IUtilisateur;
}

export class Commentaire implements ICommentaire {
    constructor(public id?: number, public iDcomm?: number, public contenu?: string, public utilisateur?: IUtilisateur) {}
}
