import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IAutresInformations } from 'app/shared/model/autres-informations.model';
import { AutresInformationsService } from './autres-informations.service';

@Component({
    selector: 'jhi-autres-informations-update',
    templateUrl: './autres-informations-update.component.html'
})
export class AutresInformationsUpdateComponent implements OnInit {
    private _autresInformations: IAutresInformations;
    isSaving: boolean;

    constructor(private autresInformationsService: AutresInformationsService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ autresInformations }) => {
            this.autresInformations = autresInformations;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.autresInformations.id !== undefined) {
            this.subscribeToSaveResponse(this.autresInformationsService.update(this.autresInformations));
        } else {
            this.subscribeToSaveResponse(this.autresInformationsService.create(this.autresInformations));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IAutresInformations>>) {
        result.subscribe((res: HttpResponse<IAutresInformations>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get autresInformations() {
        return this._autresInformations;
    }

    set autresInformations(autresInformations: IAutresInformations) {
        this._autresInformations = autresInformations;
    }
}
