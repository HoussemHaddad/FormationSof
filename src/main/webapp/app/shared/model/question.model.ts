import { ITypeQuestion } from 'app/shared/model//type-question.model';
import { IReservation } from 'app/shared/model//reservation.model';
import { IFormulaire } from 'app/shared/model//formulaire.model';

export interface IQuestion {
    id?: number;
    iDQuestion?: number;
    titre?: string;
    typeQuestion?: ITypeQuestion;
    reservations?: IReservation[];
    formulaires?: IFormulaire[];
}

export class Question implements IQuestion {
    constructor(
        public id?: number,
        public iDQuestion?: number,
        public titre?: string,
        public typeQuestion?: ITypeQuestion,
        public reservations?: IReservation[],
        public formulaires?: IFormulaire[]
    ) {}
}
