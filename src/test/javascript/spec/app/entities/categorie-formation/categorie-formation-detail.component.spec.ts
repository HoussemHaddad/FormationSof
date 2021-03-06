/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { FormationSofTestModule } from '../../../test.module';
import { CategorieFormationDetailComponent } from 'app/entities/categorie-formation/categorie-formation-detail.component';
import { CategorieFormation } from 'app/shared/model/categorie-formation.model';

describe('Component Tests', () => {
    describe('CategorieFormation Management Detail Component', () => {
        let comp: CategorieFormationDetailComponent;
        let fixture: ComponentFixture<CategorieFormationDetailComponent>;
        const route = ({ data: of({ categorieFormation: new CategorieFormation(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [CategorieFormationDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(CategorieFormationDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(CategorieFormationDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.categorieFormation).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
