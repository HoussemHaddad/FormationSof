import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormationSofSharedModule } from 'app/shared';
import {
    CategorieFormationComponent,
    CategorieFormationDetailComponent,
    CategorieFormationUpdateComponent,
    CategorieFormationDeletePopupComponent,
    CategorieFormationDeleteDialogComponent,
    categorieFormationRoute,
    categorieFormationPopupRoute
} from './';

const ENTITY_STATES = [...categorieFormationRoute, ...categorieFormationPopupRoute];

@NgModule({
    imports: [FormationSofSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        CategorieFormationComponent,
        CategorieFormationDetailComponent,
        CategorieFormationUpdateComponent,
        CategorieFormationDeleteDialogComponent,
        CategorieFormationDeletePopupComponent
    ],
    entryComponents: [
        CategorieFormationComponent,
        CategorieFormationUpdateComponent,
        CategorieFormationDeleteDialogComponent,
        CategorieFormationDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormationSofCategorieFormationModule {}
