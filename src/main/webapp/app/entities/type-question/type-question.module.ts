import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormationSofSharedModule } from 'app/shared';
import {
    TypeQuestionComponent,
    TypeQuestionDetailComponent,
    TypeQuestionUpdateComponent,
    TypeQuestionDeletePopupComponent,
    TypeQuestionDeleteDialogComponent,
    typeQuestionRoute,
    typeQuestionPopupRoute
} from './';

const ENTITY_STATES = [...typeQuestionRoute, ...typeQuestionPopupRoute];

@NgModule({
    imports: [FormationSofSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        TypeQuestionComponent,
        TypeQuestionDetailComponent,
        TypeQuestionUpdateComponent,
        TypeQuestionDeleteDialogComponent,
        TypeQuestionDeletePopupComponent
    ],
    entryComponents: [
        TypeQuestionComponent,
        TypeQuestionUpdateComponent,
        TypeQuestionDeleteDialogComponent,
        TypeQuestionDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormationSofTypeQuestionModule {}
