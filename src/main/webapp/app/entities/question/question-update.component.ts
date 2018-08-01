import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IQuestion } from 'app/shared/model/question.model';
import { QuestionService } from './question.service';
import { ITypeQuestion } from 'app/shared/model/type-question.model';
import { TypeQuestionService } from 'app/entities/type-question';
import { IReservation } from 'app/shared/model/reservation.model';
import { ReservationService } from 'app/entities/reservation';
import { IFormulaire } from 'app/shared/model/formulaire.model';
import { FormulaireService } from 'app/entities/formulaire';

@Component({
    selector: 'jhi-question-update',
    templateUrl: './question-update.component.html'
})
export class QuestionUpdateComponent implements OnInit {
    private _question: IQuestion;
    isSaving: boolean;

    typequestions: ITypeQuestion[];

    reservations: IReservation[];

    formulaires: IFormulaire[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private questionService: QuestionService,
        private typeQuestionService: TypeQuestionService,
        private reservationService: ReservationService,
        private formulaireService: FormulaireService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ question }) => {
            this.question = question;
        });
        this.typeQuestionService.query().subscribe(
            (res: HttpResponse<ITypeQuestion[]>) => {
                this.typequestions = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.reservationService.query().subscribe(
            (res: HttpResponse<IReservation[]>) => {
                this.reservations = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.formulaireService.query().subscribe(
            (res: HttpResponse<IFormulaire[]>) => {
                this.formulaires = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.question.id !== undefined) {
            this.subscribeToSaveResponse(this.questionService.update(this.question));
        } else {
            this.subscribeToSaveResponse(this.questionService.create(this.question));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IQuestion>>) {
        result.subscribe((res: HttpResponse<IQuestion>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackTypeQuestionById(index: number, item: ITypeQuestion) {
        return item.id;
    }

    trackReservationById(index: number, item: IReservation) {
        return item.id;
    }

    trackFormulaireById(index: number, item: IFormulaire) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
    get question() {
        return this._question;
    }

    set question(question: IQuestion) {
        this._question = question;
    }
}
