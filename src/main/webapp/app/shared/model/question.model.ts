export interface IQuestion {
    id?: number;
    iDQuestion?: number;
    titre?: string;
}

export class Question implements IQuestion {
    constructor(public id?: number, public iDQuestion?: number, public titre?: string) {}
}
