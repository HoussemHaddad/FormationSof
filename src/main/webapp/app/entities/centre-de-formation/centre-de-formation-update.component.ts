import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICentreDeFormation } from 'app/shared/model/centre-de-formation.model';
import { CentreDeFormationService } from './centre-de-formation.service';

@Component({
    selector: 'jhi-centre-de-formation-update',
    templateUrl: './centre-de-formation-update.component.html'
})
export class CentreDeFormationUpdateComponent implements OnInit {
    private _centreDeFormation: ICentreDeFormation;
    isSaving: boolean;

    constructor(private centreDeFormationService: CentreDeFormationService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ centreDeFormation }) => {
            this.centreDeFormation = centreDeFormation;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.centreDeFormation.id !== undefined) {
            this.subscribeToSaveResponse(this.centreDeFormationService.update(this.centreDeFormation));
        } else {
            this.subscribeToSaveResponse(this.centreDeFormationService.create(this.centreDeFormation));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ICentreDeFormation>>) {
        result.subscribe((res: HttpResponse<ICentreDeFormation>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get centreDeFormation() {
        return this._centreDeFormation;
    }

    set centreDeFormation(centreDeFormation: ICentreDeFormation) {
        this._centreDeFormation = centreDeFormation;
    }
}
