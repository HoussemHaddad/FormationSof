import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAutresInformations } from 'app/shared/model/autres-informations.model';

@Component({
    selector: 'jhi-autres-informations-detail',
    templateUrl: './autres-informations-detail.component.html'
})
export class AutresInformationsDetailComponent implements OnInit {
    autresInformations: IAutresInformations;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ autresInformations }) => {
            this.autresInformations = autresInformations;
        });
    }

    previousState() {
        window.history.back();
    }
}
