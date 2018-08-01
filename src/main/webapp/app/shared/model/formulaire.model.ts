export interface IFormulaire {
    id?: number;
    iDFormulaire?: number;
}

export class Formulaire implements IFormulaire {
    constructor(public id?: number, public iDFormulaire?: number) {}
}
