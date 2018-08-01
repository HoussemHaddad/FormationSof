import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ICategorieFormation } from 'app/shared/model/categorie-formation.model';
import { Principal } from 'app/core';
import { CategorieFormationService } from './categorie-formation.service';

@Component({
    selector: 'jhi-categorie-formation',
    templateUrl: './categorie-formation.component.html'
})
export class CategorieFormationComponent implements OnInit, OnDestroy {
    categorieFormations: ICategorieFormation[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private categorieFormationService: CategorieFormationService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.categorieFormationService.query().subscribe(
            (res: HttpResponse<ICategorieFormation[]>) => {
                this.categorieFormations = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInCategorieFormations();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ICategorieFormation) {
        return item.id;
    }

    registerChangeInCategorieFormations() {
        this.eventSubscriber = this.eventManager.subscribe('categorieFormationListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
