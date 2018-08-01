import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICategorieFormation } from 'app/shared/model/categorie-formation.model';
import { CategorieFormationService } from './categorie-formation.service';

@Component({
    selector: 'jhi-categorie-formation-delete-dialog',
    templateUrl: './categorie-formation-delete-dialog.component.html'
})
export class CategorieFormationDeleteDialogComponent {
    categorieFormation: ICategorieFormation;

    constructor(
        private categorieFormationService: CategorieFormationService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.categorieFormationService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'categorieFormationListModification',
                content: 'Deleted an categorieFormation'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-categorie-formation-delete-popup',
    template: ''
})
export class CategorieFormationDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ categorieFormation }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(CategorieFormationDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.categorieFormation = categorieFormation;
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
