export interface IFormation {
    id?: number;
    iDFormation?: number;
    nomFormation?: string;
    information?: string;
}

export class Formation implements IFormation {
    constructor(public id?: number, public iDFormation?: number, public nomFormation?: string, public information?: string) {}
}
