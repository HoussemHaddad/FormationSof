import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICategorieFormation } from 'app/shared/model/categorie-formation.model';
import { CategorieFormationService } from './categorie-formation.service';

@Component({
    selector: 'jhi-categorie-formation-update',
    templateUrl: './categorie-formation-update.component.html'
})
export class CategorieFormationUpdateComponent implements OnInit {
    private _categorieFormation: ICategorieFormation;
    isSaving: boolean;

    constructor(private categorieFormationService: CategorieFormationService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ categorieFormation }) => {
            this.categorieFormation = categorieFormation;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.categorieFormation.id !== undefined) {
            this.subscribeToSaveResponse(this.categorieFormationService.update(this.categorieFormation));
        } else {
            this.subscribeToSaveResponse(this.categorieFormationService.create(this.categorieFormation));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ICategorieFormation>>) {
        result.subscribe((res: HttpResponse<ICategorieFormation>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get categorieFormation() {
        return this._categorieFormation;
    }

    set categorieFormation(categorieFormation: ICategorieFormation) {
        this._categorieFormation = categorieFormation;
    }
}
