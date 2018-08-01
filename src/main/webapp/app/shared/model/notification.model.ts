export interface INotification {
    id?: number;
    iDNotif?: number;
}

export class Notification implements INotification {
    constructor(public id?: number, public iDNotif?: number) {}
}
