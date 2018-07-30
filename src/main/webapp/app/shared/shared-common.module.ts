import { NgModule } from '@angular/core';

import { FormationSofSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [FormationSofSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [FormationSofSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FormationSofSharedCommonModule {}
