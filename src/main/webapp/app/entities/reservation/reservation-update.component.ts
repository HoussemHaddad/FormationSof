import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IReservation } from 'app/shared/model/reservation.model';
import { ReservationService } from './reservation.service';
import { IUtilisateur } from 'app/shared/model/utilisateur.model';
import { UtilisateurService } from 'app/entities/utilisateur';
import { IFormation } from 'app/shared/model/formation.model';
import { FormationService } from 'app/entities/formation';
import { IQuestion } from 'app/shared/model/question.model';
import { QuestionService } from 'app/entities/question';

@Component({
    selector: 'jhi-reservation-update',
    templateUrl: './reservation-update.component.html'
})
export class ReservationUpdateComponent implements OnInit {
    private _reservation: IReservation;
    isSaving: boolean;

    utilisateurs: IUtilisateur[];

    formations: IFormation[];

    questions: IQuestion[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private reservationService: ReservationService,
        private utilisateurService: UtilisateurService,
        private formationService: FormationService,
        private questionService: QuestionService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ reservation }) => {
            this.reservation = reservation;
        });
        this.utilisateurService.query().subscribe(
            (res: HttpResponse<IUtilisateur[]>) => {
                this.utilisateurs = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.formationService.query().subscribe(
            (res: HttpResponse<IFormation[]>) => {
                this.formations = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.questionService.query().subscribe(
            (res: HttpResponse<IQuestion[]>) => {
                this.questions = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.reservation.id !== undefined) {
            this.subscribeToSaveResponse(this.reservationService.update(this.reservation));
        } else {
            this.subscribeToSaveResponse(this.reservationService.create(this.reservation));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IReservation>>) {
        result.subscribe((res: HttpResponse<IReservation>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackFormationById(index: number, item: IFormation) {
        return item.id;
    }

    trackQuestionById(index: number, item: IQuestion) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
    get reservation() {
        return this._reservation;
    }

    set reservation(reservation: IReservation) {
        this._reservation = reservation;
    }
}
