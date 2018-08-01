/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { FormationSofTestModule } from '../../../test.module';
import { FormulaireDetailComponent } from 'app/entities/formulaire/formulaire-detail.component';
import { Formulaire } from 'app/shared/model/formulaire.model';

describe('Component Tests', () => {
    describe('Formulaire Management Detail Component', () => {
        let comp: FormulaireDetailComponent;
        let fixture: ComponentFixture<FormulaireDetailComponent>;
        const route = ({ data: of({ formulaire: new Formulaire(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [FormulaireDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(FormulaireDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(FormulaireDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.formulaire).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
