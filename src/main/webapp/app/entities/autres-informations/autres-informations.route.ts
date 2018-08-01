import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AutresInformations } from 'app/shared/model/autres-informations.model';
import { AutresInformationsService } from './autres-informations.service';
import { AutresInformationsComponent } from './autres-informations.component';
import { AutresInformationsDetailComponent } from './autres-informations-detail.component';
import { AutresInformationsUpdateComponent } from './autres-informations-update.component';
import { AutresInformationsDeletePopupComponent } from './autres-informations-delete-dialog.component';
import { IAutresInformations } from 'app/shared/model/autres-informations.model';

@Injectable({ providedIn: 'root' })
export class AutresInformationsResolve implements Resolve<IAutresInformations> {
    constructor(private service: AutresInformationsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((autresInformations: HttpResponse<AutresInformations>) => autresInformations.body));
        }
        return of(new AutresInformations());
    }
}

export const autresInformationsRoute: Routes = [
    {
        path: 'autres-informations',
        component: AutresInformationsComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'AutresInformations'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'autres-informations/:id/view',
        component: AutresInformationsDetailComponent,
        resolve: {
            autresInformations: AutresInformationsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'AutresInformations'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'autres-informations/new',
        component: AutresInformationsUpdateComponent,
        resolve: {
            autresInformations: AutresInformationsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'AutresInformations'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'autres-informations/:id/edit',
        component: AutresInformationsUpdateComponent,
        resolve: {
            autresInformations: AutresInformationsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'AutresInformations'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const autresInformationsPopupRoute: Routes = [
    {
        path: 'autres-informations/:id/delete',
        component: AutresInformationsDeletePopupComponent,
        resolve: {
            autresInformations: AutresInformationsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'AutresInformations'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
