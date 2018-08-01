import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IAutresInformations } from 'app/shared/model/autres-informations.model';
import { Principal } from 'app/core';
import { AutresInformationsService } from './autres-informations.service';

@Component({
    selector: 'jhi-autres-informations',
    templateUrl: './autres-informations.component.html'
})
export class AutresInformationsComponent implements OnInit, OnDestroy {
    autresInformations: IAutresInformations[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private autresInformationsService: AutresInformationsService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.autresInformationsService.query().subscribe(
            (res: HttpResponse<IAutresInformations[]>) => {
                this.autresInformations = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInAutresInformations();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IAutresInformations) {
        return item.id;
    }

    registerChangeInAutresInformations() {
        this.eventSubscriber = this.eventManager.subscribe('autresInformationsListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
