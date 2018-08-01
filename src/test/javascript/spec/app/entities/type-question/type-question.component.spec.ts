/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { FormationSofTestModule } from '../../../test.module';
import { TypeQuestionComponent } from 'app/entities/type-question/type-question.component';
import { TypeQuestionService } from 'app/entities/type-question/type-question.service';
import { TypeQuestion } from 'app/shared/model/type-question.model';

describe('Component Tests', () => {
    describe('TypeQuestion Management Component', () => {
        let comp: TypeQuestionComponent;
        let fixture: ComponentFixture<TypeQuestionComponent>;
        let service: TypeQuestionService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [TypeQuestionComponent],
                providers: []
            })
                .overrideTemplate(TypeQuestionComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(TypeQuestionComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TypeQuestionService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new TypeQuestion(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.typeQuestions[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
