import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CentreDeFormation } from 'app/shared/model/centre-de-formation.model';
import { CentreDeFormationService } from './centre-de-formation.service';
import { CentreDeFormationComponent } from './centre-de-formation.component';
import { CentreDeFormationDetailComponent } from './centre-de-formation-detail.component';
import { CentreDeFormationUpdateComponent } from './centre-de-formation-update.component';
import { CentreDeFormationDeletePopupComponent } from './centre-de-formation-delete-dialog.component';
import { ICentreDeFormation } from 'app/shared/model/centre-de-formation.model';

@Injectable({ providedIn: 'root' })
export class CentreDeFormationResolve implements Resolve<ICentreDeFormation> {
    constructor(private service: CentreDeFormationService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((centreDeFormation: HttpResponse<CentreDeFormation>) => centreDeFormation.body));
        }
        return of(new CentreDeFormation());
    }
}

export const centreDeFormationRoute: Routes = [
    {
        path: 'centre-de-formation',
        component: CentreDeFormationComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'CentreDeFormations'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'centre-de-formation/:id/view',
        component: CentreDeFormationDetailComponent,
        resolve: {
            centreDeFormation: CentreDeFormationResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'CentreDeFormations'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'centre-de-formation/new',
        component: CentreDeFormationUpdateComponent,
        resolve: {
            centreDeFormation: CentreDeFormationResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'CentreDeFormations'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'centre-de-formation/:id/edit',
        component: CentreDeFormationUpdateComponent,
        resolve: {
            centreDeFormation: CentreDeFormationResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'CentreDeFormations'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const centreDeFormationPopupRoute: Routes = [
    {
        path: 'centre-de-formation/:id/delete',
        component: CentreDeFormationDeletePopupComponent,
        resolve: {
            centreDeFormation: CentreDeFormationResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'CentreDeFormations'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
