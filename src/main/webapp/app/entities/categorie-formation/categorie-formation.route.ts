import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategorieFormation } from 'app/shared/model/categorie-formation.model';
import { CategorieFormationService } from './categorie-formation.service';
import { CategorieFormationComponent } from './categorie-formation.component';
import { CategorieFormationDetailComponent } from './categorie-formation-detail.component';
import { CategorieFormationUpdateComponent } from './categorie-formation-update.component';
import { CategorieFormationDeletePopupComponent } from './categorie-formation-delete-dialog.component';
import { ICategorieFormation } from 'app/shared/model/categorie-formation.model';

@Injectable({ providedIn: 'root' })
export class CategorieFormationResolve implements Resolve<ICategorieFormation> {
    constructor(private service: CategorieFormationService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((categorieFormation: HttpResponse<CategorieFormation>) => categorieFormation.body));
        }
        return of(new CategorieFormation());
    }
}

export const categorieFormationRoute: Routes = [
    {
        path: 'categorie-formation',
        component: CategorieFormationComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'CategorieFormations'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'categorie-formation/:id/view',
        component: CategorieFormationDetailComponent,
        resolve: {
            categorieFormation: CategorieFormationResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'CategorieFormations'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'categorie-formation/new',
        component: CategorieFormationUpdateComponent,
        resolve: {
            categorieFormation: CategorieFormationResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'CategorieFormations'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'categorie-formation/:id/edit',
        component: CategorieFormationUpdateComponent,
        resolve: {
            categorieFormation: CategorieFormationResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'CategorieFormations'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const categorieFormationPopupRoute: Routes = [
    {
        path: 'categorie-formation/:id/delete',
        component: CategorieFormationDeletePopupComponent,
        resolve: {
            categorieFormation: CategorieFormationResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'CategorieFormations'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
