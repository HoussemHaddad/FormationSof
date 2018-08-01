/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { FormationSofTestModule } from '../../../test.module';
import { CategorieFormationDeleteDialogComponent } from 'app/entities/categorie-formation/categorie-formation-delete-dialog.component';
import { CategorieFormationService } from 'app/entities/categorie-formation/categorie-formation.service';

describe('Component Tests', () => {
    describe('CategorieFormation Management Delete Component', () => {
        let comp: CategorieFormationDeleteDialogComponent;
        let fixture: ComponentFixture<CategorieFormationDeleteDialogComponent>;
        let service: CategorieFormationService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [CategorieFormationDeleteDialogComponent]
            })
                .overrideTemplate(CategorieFormationDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(CategorieFormationDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CategorieFormationService);
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
