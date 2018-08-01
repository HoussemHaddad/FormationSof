/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { FormationSofTestModule } from '../../../test.module';
import { AutresInformationsDetailComponent } from 'app/entities/autres-informations/autres-informations-detail.component';
import { AutresInformations } from 'app/shared/model/autres-informations.model';

describe('Component Tests', () => {
    describe('AutresInformations Management Detail Component', () => {
        let comp: AutresInformationsDetailComponent;
        let fixture: ComponentFixture<AutresInformationsDetailComponent>;
        const route = ({ data: of({ autresInformations: new AutresInformations(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [AutresInformationsDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(AutresInformationsDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(AutresInformationsDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.autresInformations).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
