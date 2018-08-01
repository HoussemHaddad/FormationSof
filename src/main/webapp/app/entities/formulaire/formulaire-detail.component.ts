import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IFormulaire } from 'app/shared/model/formulaire.model';

@Component({
    selector: 'jhi-formulaire-detail',
    templateUrl: './formulaire-detail.component.html'
})
export class FormulaireDetailComponent implements OnInit {
    formulaire: IFormulaire;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ formulaire }) => {
            this.formulaire = formulaire;
        });
    }

    previousState() {
        window.history.back();
    }
}
