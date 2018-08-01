import { IUtilisateur } from 'app/shared/model//utilisateur.model';
import { IRole } from 'app/shared/model//role.model';
import { ICommentaire } from 'app/shared/model//commentaire.model';
import { IFormulaire } from 'app/shared/model//formulaire.model';
import { INotification } from 'app/shared/model//notification.model';
import { IReservation } from 'app/shared/model//reservation.model';

export interface IUtilisateur {
    id?: number;
    iDuser?: number;
    utilisateur?: IUtilisateur;
    roles?: IRole[];
    utilisateurs?: IUtilisateur[];
    commentaires?: ICommentaire[];
    formulaires?: IFormulaire[];
    notifications?: INotification[];
    reservations?: IReservation[];
}

export class Utilisateur implements IUtilisateur {
    constructor(
        public id?: number,
        public iDuser?: number,
        public utilisateur?: IUtilisateur,
        public roles?: IRole[],
        public utilisateurs?: IUtilisateur[],
        public commentaires?: ICommentaire[],
        public formulaires?: IFormulaire[],
        public notifications?: INotification[],
        public reservations?: IReservation[]
    ) {}
}
