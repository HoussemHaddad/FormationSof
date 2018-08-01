import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITypeQuestion } from 'app/shared/model/type-question.model';

@Component({
    selector: 'jhi-type-question-detail',
    templateUrl: './type-question-detail.component.html'
})
export class TypeQuestionDetailComponent implements OnInit {
    typeQuestion: ITypeQuestion;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ typeQuestion }) => {
            this.typeQuestion = typeQuestion;
        });
    }

    previousState() {
        window.history.back();
    }
}
