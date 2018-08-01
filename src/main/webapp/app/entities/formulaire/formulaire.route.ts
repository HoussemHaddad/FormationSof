import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Formulaire } from 'app/shared/model/formulaire.model';
import { FormulaireService } from './formulaire.service';
import { FormulaireComponent } from './formulaire.component';
import { FormulaireDetailComponent } from './formulaire-detail.component';
import { FormulaireUpdateComponent } from './formulaire-update.component';
import { FormulaireDeletePopupComponent } from './formulaire-delete-dialog.component';
import { IFormulaire } from 'app/shared/model/formulaire.model';

@Injectable({ providedIn: 'root' })
export class FormulaireResolve implements Resolve<IFormulaire> {
    constructor(private service: FormulaireService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((formulaire: HttpResponse<Formulaire>) => formulaire.body));
        }
        return of(new Formulaire());
    }
}

export const formulaireRoute: Routes = [
    {
        path: 'formulaire',
        component: FormulaireComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Formulaires'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'formulaire/:id/view',
        component: FormulaireDetailComponent,
        resolve: {
            formulaire: FormulaireResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Formulaires'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'formulaire/new',
        component: FormulaireUpdateComponent,
        resolve: {
            formulaire: FormulaireResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Formulaires'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'formulaire/:id/edit',
        component: FormulaireUpdateComponent,
        resolve: {
            formulaire: FormulaireResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Formulaires'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const formulairePopupRoute: Routes = [
    {
        path: 'formulaire/:id/delete',
        component: FormulaireDeletePopupComponent,
        resolve: {
            formulaire: FormulaireResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Formulaires'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
