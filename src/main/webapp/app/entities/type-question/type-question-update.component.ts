import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITypeQuestion } from 'app/shared/model/type-question.model';
import { TypeQuestionService } from './type-question.service';

@Component({
    selector: 'jhi-type-question-update',
    templateUrl: './type-question-update.component.html'
})
export class TypeQuestionUpdateComponent implements OnInit {
    private _typeQuestion: ITypeQuestion;
    isSaving: boolean;

    constructor(private typeQuestionService: TypeQuestionService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ typeQuestion }) => {
            this.typeQuestion = typeQuestion;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.typeQuestion.id !== undefined) {
            this.subscribeToSaveResponse(this.typeQuestionService.update(this.typeQuestion));
        } else {
            this.subscribeToSaveResponse(this.typeQuestionService.create(this.typeQuestion));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ITypeQuestion>>) {
        result.subscribe((res: HttpResponse<ITypeQuestion>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get typeQuestion() {
        return this._typeQuestion;
    }

    set typeQuestion(typeQuestion: ITypeQuestion) {
        this._typeQuestion = typeQuestion;
    }
}
