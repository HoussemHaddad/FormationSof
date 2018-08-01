/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { FormationSofTestModule } from '../../../test.module';
import { CentreDeFormationComponent } from 'app/entities/centre-de-formation/centre-de-formation.component';
import { CentreDeFormationService } from 'app/entities/centre-de-formation/centre-de-formation.service';
import { CentreDeFormation } from 'app/shared/model/centre-de-formation.model';

describe('Component Tests', () => {
    describe('CentreDeFormation Management Component', () => {
        let comp: CentreDeFormationComponent;
        let fixture: ComponentFixture<CentreDeFormationComponent>;
        let service: CentreDeFormationService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [CentreDeFormationComponent],
                providers: []
            })
                .overrideTemplate(CentreDeFormationComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(CentreDeFormationComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CentreDeFormationService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new CentreDeFormation(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.centreDeFormations[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
