/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { FormationSofTestModule } from '../../../test.module';
import { TypeDeNotificationDeleteDialogComponent } from 'app/entities/type-de-notification/type-de-notification-delete-dialog.component';
import { TypeDeNotificationService } from 'app/entities/type-de-notification/type-de-notification.service';

describe('Component Tests', () => {
    describe('TypeDeNotification Management Delete Component', () => {
        let comp: TypeDeNotificationDeleteDialogComponent;
        let fixture: ComponentFixture<TypeDeNotificationDeleteDialogComponent>;
        let service: TypeDeNotificationService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [TypeDeNotificationDeleteDialogComponent]
            })
                .overrideTemplate(TypeDeNotificationDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(TypeDeNotificationDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TypeDeNotificationService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
