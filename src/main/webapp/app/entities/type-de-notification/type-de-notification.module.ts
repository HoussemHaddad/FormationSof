import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormationSofSharedModule } from 'app/shared';
import {
    TypeDeNotificationComponent,
    TypeDeNotificationDetailComponent,
    TypeDeNotificationUpdateComponent,
    TypeDeNotificationDeletePopupComponent,
    TypeDeNotificationDeleteDialogComponent,
    typeDeNotificationRoute,
    typeDeNotificationPopupRoute
} from './';

const ENTITY_STATES = [...typeDeNotificationRoute, ...typeDeNotificationPopupRoute];

@NgModule({
    imports: [FormationSofSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        TypeDeNotificationComponent,
        TypeDeNotificationDetailComponent,
        TypeDeNotificationUpdateComponent,
        TypeDeNotificationDeleteDialogComponent,
        TypeDeNotificationDeletePopupComponent
    ],
    entryComponents: [
        TypeDeNotificationComponent,
        TypeDeNotificationUpdateComponent,
        TypeDeNotificationDeleteDialogComponent,
        TypeDeNotificationDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormationSofTypeDeNotificationModule {}
