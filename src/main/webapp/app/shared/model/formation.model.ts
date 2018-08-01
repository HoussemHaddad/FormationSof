import { ICentreDeFormation } from 'app/shared/model//centre-de-formation.model';
import { ICategorieFormation } from 'app/shared/model//categorie-formation.model';
import { IFormulaire } from 'app/shared/model//formulaire.model';
import { IReservation } from 'app/shared/model//reservation.model';

export interface IFormation {
    id?: number;
    iDFormation?: number;
    nomFormation?: string;
    information?: string;
    centreDeFormation?: ICentreDeFormation;
    categorieFormation?: ICategorieFormation;
    formulaires?: IFormulaire[];
    reservations?: IReservation[];
}

export class Formation implements IFormation {
    constructor(
        public id?: number,
        public iDFormation?: number,
        public nomFormation?: string,
        public information?: string,
        public centreDeFormation?: ICentreDeFormation,
        public categorieFormation?: ICategorieFormation,
        public formulaires?: IFormulaire[],
        public reservations?: IReservation[]
    ) {}
}
