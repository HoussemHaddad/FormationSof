import { IFormation } from 'app/shared/model//formation.model';

export interface ICategorieFormation {
    id?: number;
    iDCategorie?: number;
    nomCategorie?: string;
    formations?: IFormation[];
}

export class CategorieFormation implements ICategorieFormation {
    constructor(public id?: number, public iDCategorie?: number, public nomCategorie?: string, public formations?: IFormation[]) {}
}
