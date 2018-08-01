/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { FormationSofTestModule } from '../../../test.module';
import { FormulaireComponent } from 'app/entities/formulaire/formulaire.component';
import { FormulaireService } from 'app/entities/formulaire/formulaire.service';
import { Formulaire } from 'app/shared/model/formulaire.model';

describe('Component Tests', () => {
    describe('Formulaire Management Component', () => {
        let comp: FormulaireComponent;
        let fixture: ComponentFixture<FormulaireComponent>;
        let service: FormulaireService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [FormulaireComponent],
                providers: []
            })
                .overrideTemplate(FormulaireComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(FormulaireComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FormulaireService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Formulaire(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.formulaires[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
