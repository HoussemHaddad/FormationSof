import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormationSofSharedModule } from 'app/shared';
import {
    CommentaireComponent,
    CommentaireDetailComponent,
    CommentaireUpdateComponent,
    CommentaireDeletePopupComponent,
    CommentaireDeleteDialogComponent,
    commentaireRoute,
    commentairePopupRoute
} from './';

const ENTITY_STATES = [...commentaireRoute, ...commentairePopupRoute];

@NgModule({
    imports: [FormationSofSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        CommentaireComponent,
        CommentaireDetailComponent,
        CommentaireUpdateComponent,
        CommentaireDeleteDialogComponent,
        CommentaireDeletePopupComponent
    ],
    entryComponents: [CommentaireComponent, CommentaireUpdateComponent, CommentaireDeleteDialogComponent, CommentaireDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormationSofCommentaireModule {}
