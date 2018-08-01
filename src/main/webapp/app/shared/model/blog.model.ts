import { Moment } from 'moment';
import { ICategory } from 'app/shared/model//category.model';

export interface IBlog {
    id?: number;
    name?: string;
    contenu?: string;
    type?: string;
    createdAt?: Moment;
    category?: ICategory;
}

export class Blog implements IBlog {
    constructor(
        public id?: number,
        public name?: string,
        public contenu?: string,
        public type?: string,
        public createdAt?: Moment,
        public category?: ICategory
    ) {}
}
