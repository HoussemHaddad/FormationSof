import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IFormulaire } from 'app/shared/model/formulaire.model';
import { FormulaireService } from './formulaire.service';

@Component({
    selector: 'jhi-formulaire-update',
    templateUrl: './formulaire-update.component.html'
})
export class FormulaireUpdateComponent implements OnInit {
    private _formulaire: IFormulaire;
    isSaving: boolean;

    constructor(private formulaireService: FormulaireService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ formulaire }) => {
            this.formulaire = formulaire;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.formulaire.id !== undefined) {
            this.subscribeToSaveResponse(this.formulaireService.update(this.formulaire));
        } else {
            this.subscribeToSaveResponse(this.formulaireService.create(this.formulaire));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IFormulaire>>) {
        result.subscribe((res: HttpResponse<IFormulaire>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get formulaire() {
        return this._formulaire;
    }

    set formulaire(formulaire: IFormulaire) {
        this._formulaire = formulaire;
    }
}
