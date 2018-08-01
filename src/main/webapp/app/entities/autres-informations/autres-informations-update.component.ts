import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IAutresInformations } from 'app/shared/model/autres-informations.model';
import { AutresInformationsService } from './autres-informations.service';
import { IReservation } from 'app/shared/model/reservation.model';
import { ReservationService } from 'app/entities/reservation';

@Component({
    selector: 'jhi-autres-informations-update',
    templateUrl: './autres-informations-update.component.html'
})
export class AutresInformationsUpdateComponent implements OnInit {
    private _autresInformations: IAutresInformations;
    isSaving: boolean;

    reservations: IReservation[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private autresInformationsService: AutresInformationsService,
        private reservationService: ReservationService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ autresInformations }) => {
            this.autresInformations = autresInformations;
        });
        this.reservationService.query().subscribe(
            (res: HttpResponse<IReservation[]>) => {
                this.reservations = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
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

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackReservationById(index: number, item: IReservation) {
        return item.id;
    }
    get autresInformations() {
        return this._autresInformations;
    }

    set autresInformations(autresInformations: IAutresInformations) {
        this._autresInformations = autresInformations;
    }
}
