import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormationSofSharedModule } from 'app/shared';
import {
    AutresInformationsComponent,
    AutresInformationsDetailComponent,
    AutresInformationsUpdateComponent,
    AutresInformationsDeletePopupComponent,
    AutresInformationsDeleteDialogComponent,
    autresInformationsRoute,
    autresInformationsPopupRoute
} from './';

const ENTITY_STATES = [...autresInformationsRoute, ...autresInformationsPopupRoute];

@NgModule({
    imports: [FormationSofSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        AutresInformationsComponent,
        AutresInformationsDetailComponent,
        AutresInformationsUpdateComponent,
        AutresInformationsDeleteDialogComponent,
        AutresInformationsDeletePopupComponent
    ],
    entryComponents: [
        AutresInformationsComponent,
        AutresInformationsUpdateComponent,
        AutresInformationsDeleteDialogComponent,
        AutresInformationsDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormationSofAutresInformationsModule {}
