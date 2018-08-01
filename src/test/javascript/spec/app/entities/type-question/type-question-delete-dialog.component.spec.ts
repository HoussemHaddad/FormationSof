/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { FormationSofTestModule } from '../../../test.module';
import { TypeQuestionDeleteDialogComponent } from 'app/entities/type-question/type-question-delete-dialog.component';
import { TypeQuestionService } from 'app/entities/type-question/type-question.service';

describe('Component Tests', () => {
    describe('TypeQuestion Management Delete Component', () => {
        let comp: TypeQuestionDeleteDialogComponent;
        let fixture: ComponentFixture<TypeQuestionDeleteDialogComponent>;
        let service: TypeQuestionService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [TypeQuestionDeleteDialogComponent]
            })
                .overrideTemplate(TypeQuestionDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(TypeQuestionDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TypeQuestionService);
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
