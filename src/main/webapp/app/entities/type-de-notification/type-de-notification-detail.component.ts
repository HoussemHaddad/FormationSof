import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITypeDeNotification } from 'app/shared/model/type-de-notification.model';

@Component({
    selector: 'jhi-type-de-notification-detail',
    templateUrl: './type-de-notification-detail.component.html'
})
export class TypeDeNotificationDetailComponent implements OnInit {
    typeDeNotification: ITypeDeNotification;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ typeDeNotification }) => {
            this.typeDeNotification = typeDeNotification;
        });
    }

    previousState() {
        window.history.back();
    }
}
