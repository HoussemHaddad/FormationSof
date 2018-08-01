/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { FormationSofTestModule } from '../../../test.module';
import { AutresInformationsComponent } from 'app/entities/autres-informations/autres-informations.component';
import { AutresInformationsService } from 'app/entities/autres-informations/autres-informations.service';
import { AutresInformations } from 'app/shared/model/autres-informations.model';

describe('Component Tests', () => {
    describe('AutresInformations Management Component', () => {
        let comp: AutresInformationsComponent;
        let fixture: ComponentFixture<AutresInformationsComponent>;
        let service: AutresInformationsService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [AutresInformationsComponent],
                providers: []
            })
                .overrideTemplate(AutresInformationsComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(AutresInformationsComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AutresInformationsService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new AutresInformations(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.autresInformations[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
