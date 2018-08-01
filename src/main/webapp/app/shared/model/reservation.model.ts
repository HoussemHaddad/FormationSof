import { IUtilisateur } from 'app/shared/model//utilisateur.model';
import { IFormation } from 'app/shared/model//formation.model';
import { IQuestion } from 'app/shared/model//question.model';
import { INotification } from 'app/shared/model//notification.model';
import { IAutresInformations } from 'app/shared/model//autres-informations.model';

export interface IReservation {
    id?: number;
    utilisateur?: IUtilisateur;
    formation?: IFormation;
    questions?: IQuestion[];
    notifications?: INotification[];
    autresInformations?: IAutresInformations[];
}

export class Reservation implements IReservation {
    constructor(
        public id?: number,
        public utilisateur?: IUtilisateur,
        public formation?: IFormation,
        public questions?: IQuestion[],
        public notifications?: INotification[],
        public autresInformations?: IAutresInformations[]
    ) {}
}
