import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ICentreDeFormation } from 'app/shared/model/centre-de-formation.model';
import { Principal } from 'app/core';
import { CentreDeFormationService } from './centre-de-formation.service';

@Component({
    selector: 'jhi-centre-de-formation',
    templateUrl: './centre-de-formation.component.html'
})
export class CentreDeFormationComponent implements OnInit, OnDestroy {
    centreDeFormations: ICentreDeFormation[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private centreDeFormationService: CentreDeFormationService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.centreDeFormationService.query().subscribe(
            (res: HttpResponse<ICentreDeFormation[]>) => {
                this.centreDeFormations = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInCentreDeFormations();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ICentreDeFormation) {
        return item.id;
    }

    registerChangeInCentreDeFormations() {
        this.eventSubscriber = this.eventManager.subscribe('centreDeFormationListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
