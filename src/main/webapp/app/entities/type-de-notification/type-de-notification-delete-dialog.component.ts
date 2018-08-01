import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ITypeDeNotification } from 'app/shared/model/type-de-notification.model';
import { TypeDeNotificationService } from './type-de-notification.service';

@Component({
    selector: 'jhi-type-de-notification-delete-dialog',
    templateUrl: './type-de-notification-delete-dialog.component.html'
})
export class TypeDeNotificationDeleteDialogComponent {
    typeDeNotification: ITypeDeNotification;

    constructor(
        private typeDeNotificationService: TypeDeNotificationService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.typeDeNotificationService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'typeDeNotificationListModification',
                content: 'Deleted an typeDeNotification'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-type-de-notification-delete-popup',
    template: ''
})
export class TypeDeNotificationDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ typeDeNotification }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(TypeDeNotificationDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.typeDeNotification = typeDeNotification;
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
