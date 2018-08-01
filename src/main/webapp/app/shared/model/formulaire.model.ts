import { IUtilisateur } from 'app/shared/model//utilisateur.model';
import { IFormation } from 'app/shared/model//formation.model';
import { IQuestion } from 'app/shared/model//question.model';

export interface IFormulaire {
    id?: number;
    iDFormulaire?: number;
    utilisateur?: IUtilisateur;
    formation?: IFormation;
    questions?: IQuestion[];
}

export class Formulaire implements IFormulaire {
    constructor(
        public id?: number,
        public iDFormulaire?: number,
        public utilisateur?: IUtilisateur,
        public formation?: IFormation,
        public questions?: IQuestion[]
    ) {}
}
