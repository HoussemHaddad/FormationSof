import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormationSofSharedModule } from 'app/shared';
import {
    FormulaireComponent,
    FormulaireDetailComponent,
    FormulaireUpdateComponent,
    FormulaireDeletePopupComponent,
    FormulaireDeleteDialogComponent,
    formulaireRoute,
    formulairePopupRoute
} from './';

const ENTITY_STATES = [...formulaireRoute, ...formulairePopupRoute];

@NgModule({
    imports: [FormationSofSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        FormulaireComponent,
        FormulaireDetailComponent,
        FormulaireUpdateComponent,
        FormulaireDeleteDialogComponent,
        FormulaireDeletePopupComponent
    ],
    entryComponents: [FormulaireComponent, FormulaireUpdateComponent, FormulaireDeleteDialogComponent, FormulaireDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormationSofFormulaireModule {}
