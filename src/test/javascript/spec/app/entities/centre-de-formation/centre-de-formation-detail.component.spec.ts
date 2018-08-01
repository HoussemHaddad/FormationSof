/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { FormationSofTestModule } from '../../../test.module';
import { CentreDeFormationDetailComponent } from 'app/entities/centre-de-formation/centre-de-formation-detail.component';
import { CentreDeFormation } from 'app/shared/model/centre-de-formation.model';

describe('Component Tests', () => {
    describe('CentreDeFormation Management Detail Component', () => {
        let comp: CentreDeFormationDetailComponent;
        let fixture: ComponentFixture<CentreDeFormationDetailComponent>;
        const route = ({ data: of({ centreDeFormation: new CentreDeFormation(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [CentreDeFormationDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(CentreDeFormationDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(CentreDeFormationDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.centreDeFormation).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
