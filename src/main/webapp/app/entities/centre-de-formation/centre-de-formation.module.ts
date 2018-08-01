import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormationSofSharedModule } from 'app/shared';
import {
    CentreDeFormationComponent,
    CentreDeFormationDetailComponent,
    CentreDeFormationUpdateComponent,
    CentreDeFormationDeletePopupComponent,
    CentreDeFormationDeleteDialogComponent,
    centreDeFormationRoute,
    centreDeFormationPopupRoute
} from './';

const ENTITY_STATES = [...centreDeFormationRoute, ...centreDeFormationPopupRoute];

@NgModule({
    imports: [FormationSofSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        CentreDeFormationComponent,
        CentreDeFormationDetailComponent,
        CentreDeFormationUpdateComponent,
        CentreDeFormationDeleteDialogComponent,
        CentreDeFormationDeletePopupComponent
    ],
    entryComponents: [
        CentreDeFormationComponent,
        CentreDeFormationUpdateComponent,
        CentreDeFormationDeleteDialogComponent,
        CentreDeFormationDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormationSofCentreDeFormationModule {}
