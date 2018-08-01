import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICommentaire } from 'app/shared/model/commentaire.model';
import { CommentaireService } from './commentaire.service';

@Component({
    selector: 'jhi-commentaire-update',
    templateUrl: './commentaire-update.component.html'
})
export class CommentaireUpdateComponent implements OnInit {
    private _commentaire: ICommentaire;
    isSaving: boolean;

    constructor(private commentaireService: CommentaireService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ commentaire }) => {
            this.commentaire = commentaire;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.commentaire.id !== undefined) {
            this.subscribeToSaveResponse(this.commentaireService.update(this.commentaire));
        } else {
            this.subscribeToSaveResponse(this.commentaireService.create(this.commentaire));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ICommentaire>>) {
        result.subscribe((res: HttpResponse<ICommentaire>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get commentaire() {
        return this._commentaire;
    }

    set commentaire(commentaire: ICommentaire) {
        this._commentaire = commentaire;
    }
}
