import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TypeDeNotification } from 'app/shared/model/type-de-notification.model';
import { TypeDeNotificationService } from './type-de-notification.service';
import { TypeDeNotificationComponent } from './type-de-notification.component';
import { TypeDeNotificationDetailComponent } from './type-de-notification-detail.component';
import { TypeDeNotificationUpdateComponent } from './type-de-notification-update.component';
import { TypeDeNotificationDeletePopupComponent } from './type-de-notification-delete-dialog.component';
import { ITypeDeNotification } from 'app/shared/model/type-de-notification.model';

@Injectable({ providedIn: 'root' })
export class TypeDeNotificationResolve implements Resolve<ITypeDeNotification> {
    constructor(private service: TypeDeNotificationService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((typeDeNotification: HttpResponse<TypeDeNotification>) => typeDeNotification.body));
        }
        return of(new TypeDeNotification());
    }
}

export const typeDeNotificationRoute: Routes = [
    {
        path: 'type-de-notification',
        component: TypeDeNotificationComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TypeDeNotifications'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'type-de-notification/:id/view',
        component: TypeDeNotificationDetailComponent,
        resolve: {
            typeDeNotification: TypeDeNotificationResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TypeDeNotifications'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'type-de-notification/new',
        component: TypeDeNotificationUpdateComponent,
        resolve: {
            typeDeNotification: TypeDeNotificationResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TypeDeNotifications'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'type-de-notification/:id/edit',
        component: TypeDeNotificationUpdateComponent,
        resolve: {
            typeDeNotification: TypeDeNotificationResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TypeDeNotifications'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const typeDeNotificationPopupRoute: Routes = [
    {
        path: 'type-de-notification/:id/delete',
        component: TypeDeNotificationDeletePopupComponent,
        resolve: {
            typeDeNotification: TypeDeNotificationResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TypeDeNotifications'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
