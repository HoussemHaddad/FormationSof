import { INotification } from 'app/shared/model//notification.model';

export interface ITypeDeNotification {
    id?: number;
    iDType?: number;
    nomType?: string;
    notifications?: INotification[];
}

export class TypeDeNotification implements ITypeDeNotification {
    constructor(public id?: number, public iDType?: number, public nomType?: string, public notifications?: INotification[]) {}
}
