import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IAutresInformations } from 'app/shared/model/autres-informations.model';
import { AutresInformationsService } from './autres-informations.service';

@Component({
    selector: 'jhi-autres-informations-delete-dialog',
    templateUrl: './autres-informations-delete-dialog.component.html'
})
export class AutresInformationsDeleteDialogComponent {
    autresInformations: IAutresInformations;

    constructor(
        private autresInformationsService: AutresInformationsService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.autresInformationsService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'autresInformationsListModification',
                content: 'Deleted an autresInformations'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-autres-informations-delete-popup',
    template: ''
})
export class AutresInformationsDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ autresInformations }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(AutresInformationsDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.autresInformations = autresInformations;
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
