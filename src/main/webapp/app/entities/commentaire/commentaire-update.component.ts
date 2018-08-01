import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { ICommentaire } from 'app/shared/model/commentaire.model';
import { CommentaireService } from './commentaire.service';
import { IUtilisateur } from 'app/shared/model/utilisateur.model';
import { UtilisateurService } from 'app/entities/utilisateur';

@Component({
    selector: 'jhi-commentaire-update',
    templateUrl: './commentaire-update.component.html'
})
export class CommentaireUpdateComponent implements OnInit {
    private _commentaire: ICommentaire;
    isSaving: boolean;

    utilisateurs: IUtilisateur[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private commentaireService: CommentaireService,
        private utilisateurService: UtilisateurService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ commentaire }) => {
            this.commentaire = commentaire;
        });
        this.utilisateurService.query().subscribe(
            (res: HttpResponse<IUtilisateur[]>) => {
                this.utilisateurs = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
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

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackUtilisateurById(index: number, item: IUtilisateur) {
        return item.id;
    }
    get commentaire() {
        return this._commentaire;
    }

    set commentaire(commentaire: ICommentaire) {
        this._commentaire = commentaire;
    }
}
