import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICentreDeFormation } from 'app/shared/model/centre-de-formation.model';
import { CentreDeFormationService } from './centre-de-formation.service';

@Component({
    selector: 'jhi-centre-de-formation-delete-dialog',
    templateUrl: './centre-de-formation-delete-dialog.component.html'
})
export class CentreDeFormationDeleteDialogComponent {
    centreDeFormation: ICentreDeFormation;

    constructor(
        private centreDeFormationService: CentreDeFormationService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.centreDeFormationService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'centreDeFormationListModification',
                content: 'Deleted an centreDeFormation'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-centre-de-formation-delete-popup',
    template: ''
})
export class CentreDeFormationDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ centreDeFormation }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(CentreDeFormationDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.centreDeFormation = centreDeFormation;
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
