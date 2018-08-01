import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ITypeQuestion } from 'app/shared/model/type-question.model';
import { Principal } from 'app/core';
import { TypeQuestionService } from './type-question.service';

@Component({
    selector: 'jhi-type-question',
    templateUrl: './type-question.component.html'
})
export class TypeQuestionComponent implements OnInit, OnDestroy {
    typeQuestions: ITypeQuestion[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private typeQuestionService: TypeQuestionService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.typeQuestionService.query().subscribe(
            (res: HttpResponse<ITypeQuestion[]>) => {
                this.typeQuestions = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInTypeQuestions();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ITypeQuestion) {
        return item.id;
    }

    registerChangeInTypeQuestions() {
        this.eventSubscriber = this.eventManager.subscribe('typeQuestionListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
