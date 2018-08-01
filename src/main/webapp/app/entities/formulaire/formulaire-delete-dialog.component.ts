import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IFormulaire } from 'app/shared/model/formulaire.model';
import { FormulaireService } from './formulaire.service';

@Component({
    selector: 'jhi-formulaire-delete-dialog',
    templateUrl: './formulaire-delete-dialog.component.html'
})
export class FormulaireDeleteDialogComponent {
    formulaire: IFormulaire;

    constructor(private formulaireService: FormulaireService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.formulaireService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'formulaireListModification',
                content: 'Deleted an formulaire'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-formulaire-delete-popup',
    template: ''
})
export class FormulaireDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ formulaire }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(FormulaireDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.formulaire = formulaire;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
