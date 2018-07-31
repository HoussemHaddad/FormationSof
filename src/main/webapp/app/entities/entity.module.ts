import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormationSofCategoryModule } from './category/category.module';
import { FormationSofBlogModule } from './blog/blog.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        FormationSofCategoryModule,
        FormationSofBlogModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormationSofEntityModule {}
