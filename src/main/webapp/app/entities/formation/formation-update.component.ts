import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IFormation } from 'app/shared/model/formation.model';
import { FormationService } from './formation.service';
import { ICentreDeFormation } from 'app/shared/model/centre-de-formation.model';
import { CentreDeFormationService } from 'app/entities/centre-de-formation';
import { ICategorieFormation } from 'app/shared/model/categorie-formation.model';
import { CategorieFormationService } from 'app/entities/categorie-formation';

@Component({
    selector: 'jhi-formation-update',
    templateUrl: './formation-update.component.html'
})
export class FormationUpdateComponent implements OnInit {
    private _formation: IFormation;
    isSaving: boolean;

    centredeformations: ICentreDeFormation[];

    categorieformations: ICategorieFormation[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private formationService: FormationService,
        private centreDeFormationService: CentreDeFormationService,
        private categorieFormationService: CategorieFormationService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ formation }) => {
            this.formation = formation;
        });
        this.centreDeFormationService.query().subscribe(
            (res: HttpResponse<ICentreDeFormation[]>) => {
                this.centredeformations = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.categorieFormationService.query().subscribe(
            (res: HttpResponse<ICategorieFormation[]>) => {
                this.categorieformations = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.formation.id !== undefined) {
            this.subscribeToSaveResponse(this.formationService.update(this.formation));
        } else {
            this.subscribeToSaveResponse(this.formationService.create(this.formation));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IFormation>>) {
        result.subscribe((res: HttpResponse<IFormation>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackCentreDeFormationById(index: number, item: ICentreDeFormation) {
        return item.id;
    }

    trackCategorieFormationById(index: number, item: ICategorieFormation) {
        return item.id;
    }
    get formation() {
        return this._formation;
    }

    set formation(formation: IFormation) {
        this._formation = formation;
    }
}
