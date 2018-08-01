export interface IRole {
    id?: number;
    iDRole?: number;
    nomRole?: string;
}

export class Role implements IRole {
    constructor(public id?: number, public iDRole?: number, public nomRole?: string) {}
}
