/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { FormationSofTestModule } from '../../../test.module';
import { CentreDeFormationDeleteDialogComponent } from 'app/entities/centre-de-formation/centre-de-formation-delete-dialog.component';
import { CentreDeFormationService } from 'app/entities/centre-de-formation/centre-de-formation.service';

describe('Component Tests', () => {
    describe('CentreDeFormation Management Delete Component', () => {
        let comp: CentreDeFormationDeleteDialogComponent;
        let fixture: ComponentFixture<CentreDeFormationDeleteDialogComponent>;
        let service: CentreDeFormationService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [CentreDeFormationDeleteDialogComponent]
            })
                .overrideTemplate(CentreDeFormationDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(CentreDeFormationDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CentreDeFormationService);
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
