import { IQuestion } from 'app/shared/model//question.model';

export interface ITypeQuestion {
    id?: number;
    iDType?: number;
    nomType?: string;
    questions?: IQuestion[];
}

export class TypeQuestion implements ITypeQuestion {
    constructor(public id?: number, public iDType?: number, public nomType?: string, public questions?: IQuestion[]) {}
}
