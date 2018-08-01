import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormationSofSharedModule } from 'app/shared';
import {
    FormationComponent,
    FormationDetailComponent,
    FormationUpdateComponent,
    FormationDeletePopupComponent,
    FormationDeleteDialogComponent,
    formationRoute,
    formationPopupRoute
} from './';

const ENTITY_STATES = [...formationRoute, ...formationPopupRoute];

@NgModule({
    imports: [FormationSofSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        FormationComponent,
        FormationDetailComponent,
        FormationUpdateComponent,
        FormationDeleteDialogComponent,
        FormationDeletePopupComponent
    ],
    entryComponents: [FormationComponent, FormationUpdateComponent, FormationDeleteDialogComponent, FormationDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormationSofFormationModule {}
