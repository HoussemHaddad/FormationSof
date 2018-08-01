export interface ICommentaire {
    id?: number;
    iDcomm?: number;
    contenu?: string;
}

export class Commentaire implements ICommentaire {
    constructor(public id?: number, public iDcomm?: number, public contenu?: string) {}
}
