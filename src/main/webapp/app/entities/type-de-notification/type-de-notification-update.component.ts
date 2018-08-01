import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITypeDeNotification } from 'app/shared/model/type-de-notification.model';
import { TypeDeNotificationService } from './type-de-notification.service';

@Component({
    selector: 'jhi-type-de-notification-update',
    templateUrl: './type-de-notification-update.component.html'
})
export class TypeDeNotificationUpdateComponent implements OnInit {
    private _typeDeNotification: ITypeDeNotification;
    isSaving: boolean;

    constructor(private typeDeNotificationService: TypeDeNotificationService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ typeDeNotification }) => {
            this.typeDeNotification = typeDeNotification;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.typeDeNotification.id !== undefined) {
            this.subscribeToSaveResponse(this.typeDeNotificationService.update(this.typeDeNotification));
        } else {
            this.subscribeToSaveResponse(this.typeDeNotificationService.create(this.typeDeNotification));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ITypeDeNotification>>) {
        result.subscribe((res: HttpResponse<ITypeDeNotification>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get typeDeNotification() {
        return this._typeDeNotification;
    }

    set typeDeNotification(typeDeNotification: ITypeDeNotification) {
        this._typeDeNotification = typeDeNotification;
    }
}
