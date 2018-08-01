export interface ITypeDeNotification {
    id?: number;
    iDType?: number;
    nomType?: string;
}

export class TypeDeNotification implements ITypeDeNotification {
    constructor(public id?: number, public iDType?: number, public nomType?: string) {}
}
