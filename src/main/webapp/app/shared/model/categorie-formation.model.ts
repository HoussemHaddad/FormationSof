export interface ICategorieFormation {
    id?: number;
    iDCategorie?: number;
    nomCategorie?: string;
}

export class CategorieFormation implements ICategorieFormation {
    constructor(public id?: number, public iDCategorie?: number, public nomCategorie?: string) {}
}
