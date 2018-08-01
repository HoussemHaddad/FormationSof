import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Formation } from 'app/shared/model/formation.model';
import { FormationService } from './formation.service';
import { FormationComponent } from './formation.component';
import { FormationDetailComponent } from './formation-detail.component';
import { FormationUpdateComponent } from './formation-update.component';
import { FormationDeletePopupComponent } from './formation-delete-dialog.component';
import { IFormation } from 'app/shared/model/formation.model';

@Injectable({ providedIn: 'root' })
export class FormationResolve implements Resolve<IFormation> {
    constructor(private service: FormationService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((formation: HttpResponse<Formation>) => formation.body));
        }
        return of(new Formation());
    }
}

export const formationRoute: Routes = [
    {
        path: 'formation',
        component: FormationComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Formations'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'formation/:id/view',
        component: FormationDetailComponent,
        resolve: {
            formation: FormationResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Formations'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'formation/new',
        component: FormationUpdateComponent,
        resolve: {
            formation: FormationResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Formations'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'formation/:id/edit',
        component: FormationUpdateComponent,
        resolve: {
            formation: FormationResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Formations'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const formationPopupRoute: Routes = [
    {
        path: 'formation/:id/delete',
        component: FormationDeletePopupComponent,
        resolve: {
            formation: FormationResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Formations'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
