export interface ITypeQuestion {
    id?: number;
    iDType?: number;
    nomType?: string;
}

export class TypeQuestion implements ITypeQuestion {
    constructor(public id?: number, public iDType?: number, public nomType?: string) {}
}
