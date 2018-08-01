import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IFormulaire } from 'app/shared/model/formulaire.model';
import { Principal } from 'app/core';
import { FormulaireService } from './formulaire.service';

@Component({
    selector: 'jhi-formulaire',
    templateUrl: './formulaire.component.html'
})
export class FormulaireComponent implements OnInit, OnDestroy {
    formulaires: IFormulaire[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private formulaireService: FormulaireService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.formulaireService.query().subscribe(
            (res: HttpResponse<IFormulaire[]>) => {
                this.formulaires = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInFormulaires();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IFormulaire) {
        return item.id;
    }

    registerChangeInFormulaires() {
        this.eventSubscriber = this.eventManager.subscribe('formulaireListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
