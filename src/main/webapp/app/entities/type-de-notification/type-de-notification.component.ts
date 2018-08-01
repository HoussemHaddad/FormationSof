import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ITypeDeNotification } from 'app/shared/model/type-de-notification.model';
import { Principal } from 'app/core';
import { TypeDeNotificationService } from './type-de-notification.service';

@Component({
    selector: 'jhi-type-de-notification',
    templateUrl: './type-de-notification.component.html'
})
export class TypeDeNotificationComponent implements OnInit, OnDestroy {
    typeDeNotifications: ITypeDeNotification[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private typeDeNotificationService: TypeDeNotificationService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.typeDeNotificationService.query().subscribe(
            (res: HttpResponse<ITypeDeNotification[]>) => {
                this.typeDeNotifications = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInTypeDeNotifications();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ITypeDeNotification) {
        return item.id;
    }

    registerChangeInTypeDeNotifications() {
        this.eventSubscriber = this.eventManager.subscribe('typeDeNotificationListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
