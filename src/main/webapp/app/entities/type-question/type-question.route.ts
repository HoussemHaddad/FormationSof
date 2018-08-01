import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TypeQuestion } from 'app/shared/model/type-question.model';
import { TypeQuestionService } from './type-question.service';
import { TypeQuestionComponent } from './type-question.component';
import { TypeQuestionDetailComponent } from './type-question-detail.component';
import { TypeQuestionUpdateComponent } from './type-question-update.component';
import { TypeQuestionDeletePopupComponent } from './type-question-delete-dialog.component';
import { ITypeQuestion } from 'app/shared/model/type-question.model';

@Injectable({ providedIn: 'root' })
export class TypeQuestionResolve implements Resolve<ITypeQuestion> {
    constructor(private service: TypeQuestionService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((typeQuestion: HttpResponse<TypeQuestion>) => typeQuestion.body));
        }
        return of(new TypeQuestion());
    }
}

export const typeQuestionRoute: Routes = [
    {
        path: 'type-question',
        component: TypeQuestionComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TypeQuestions'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'type-question/:id/view',
        component: TypeQuestionDetailComponent,
        resolve: {
            typeQuestion: TypeQuestionResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TypeQuestions'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'type-question/new',
        component: TypeQuestionUpdateComponent,
        resolve: {
            typeQuestion: TypeQuestionResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TypeQuestions'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'type-question/:id/edit',
        component: TypeQuestionUpdateComponent,
        resolve: {
            typeQuestion: TypeQuestionResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TypeQuestions'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const typeQuestionPopupRoute: Routes = [
    {
        path: 'type-question/:id/delete',
        component: TypeQuestionDeletePopupComponent,
        resolve: {
            typeQuestion: TypeQuestionResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TypeQuestions'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
