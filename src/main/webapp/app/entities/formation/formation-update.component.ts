import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IFormation } from 'app/shared/model/formation.model';
import { FormationService } from './formation.service';

@Component({
    selector: 'jhi-formation-update',
    templateUrl: './formation-update.component.html'
})
export class FormationUpdateComponent implements OnInit {
    private _formation: IFormation;
    isSaving: boolean;

    constructor(private formationService: FormationService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ formation }) => {
            this.formation = formation;
        });
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
    get formation() {
        return this._formation;
    }

    set formation(formation: IFormation) {
        this._formation = formation;
    }
}
