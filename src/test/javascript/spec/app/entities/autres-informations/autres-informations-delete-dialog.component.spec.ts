/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { FormationSofTestModule } from '../../../test.module';
import { AutresInformationsDeleteDialogComponent } from 'app/entities/autres-informations/autres-informations-delete-dialog.component';
import { AutresInformationsService } from 'app/entities/autres-informations/autres-informations.service';

describe('Component Tests', () => {
    describe('AutresInformations Management Delete Component', () => {
        let comp: AutresInformationsDeleteDialogComponent;
        let fixture: ComponentFixture<AutresInformationsDeleteDialogComponent>;
        let service: AutresInformationsService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [AutresInformationsDeleteDialogComponent]
            })
                .overrideTemplate(AutresInformationsDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(AutresInformationsDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AutresInformationsService);
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
