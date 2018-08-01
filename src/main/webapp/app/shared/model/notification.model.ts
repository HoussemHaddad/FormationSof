import { IUtilisateur } from 'app/shared/model//utilisateur.model';
import { IReservation } from 'app/shared/model//reservation.model';
import { ITypeDeNotification } from 'app/shared/model//type-de-notification.model';

export interface INotification {
    id?: number;
    iDNotif?: number;
    utilisateur?: IUtilisateur;
    reservation?: IReservation;
    typeDeNotification?: ITypeDeNotification;
}

export class Notification implements INotification {
    constructor(
        public id?: number,
        public iDNotif?: number,
        public utilisateur?: IUtilisateur,
        public reservation?: IReservation,
        public typeDeNotification?: ITypeDeNotification
    ) {}
}
