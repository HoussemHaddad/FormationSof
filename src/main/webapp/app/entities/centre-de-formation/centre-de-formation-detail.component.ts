import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICentreDeFormation } from 'app/shared/model/centre-de-formation.model';

@Component({
    selector: 'jhi-centre-de-formation-detail',
    templateUrl: './centre-de-formation-detail.component.html'
})
export class CentreDeFormationDetailComponent implements OnInit {
    centreDeFormation: ICentreDeFormation;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ centreDeFormation }) => {
            this.centreDeFormation = centreDeFormation;
        });
    }

    previousState() {
        window.history.back();
    }
}
