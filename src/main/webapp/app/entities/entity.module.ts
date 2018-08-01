import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormationSofCategoryModule } from './category/category.module';
import { FormationSofBlogModule } from './blog/blog.module';
import { FormationSofUtilisateurModule } from './utilisateur/utilisateur.module';
import { FormationSofFormulaireModule } from './formulaire/formulaire.module';
import { FormationSofQuestionModule } from './question/question.module';
import { FormationSofTypeQuestionModule } from './type-question/type-question.module';
import { FormationSofReservationModule } from './reservation/reservation.module';
import { FormationSofAutresInformationsModule } from './autres-informations/autres-informations.module';
import { FormationSofRoleModule } from './role/role.module';
import { FormationSofCommentaireModule } from './commentaire/commentaire.module';
import { FormationSofFormationModule } from './formation/formation.module';
import { FormationSofCentreDeFormationModule } from './centre-de-formation/centre-de-formation.module';
import { FormationSofNotificationModule } from './notification/notification.module';
import { FormationSofTypeDeNotificationModule } from './type-de-notification/type-de-notification.module';
import { FormationSofCategorieFormationModule } from './categorie-formation/categorie-formation.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        FormationSofCategoryModule,
        FormationSofBlogModule,
        FormationSofUtilisateurModule,
        FormationSofFormulaireModule,
        FormationSofQuestionModule,
        FormationSofTypeQuestionModule,
        FormationSofReservationModule,
        FormationSofAutresInformationsModule,
        FormationSofRoleModule,
        FormationSofCommentaireModule,
        FormationSofFormationModule,
        FormationSofCentreDeFormationModule,
        FormationSofNotificationModule,
        FormationSofTypeDeNotificationModule,
        FormationSofCategorieFormationModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormationSofEntityModule {}
