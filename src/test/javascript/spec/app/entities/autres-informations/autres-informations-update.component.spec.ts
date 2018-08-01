/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { FormationSofTestModule } from '../../../test.module';
import { AutresInformationsUpdateComponent } from 'app/entities/autres-informations/autres-informations-update.component';
import { AutresInformationsService } from 'app/entities/autres-informations/autres-informations.service';
import { AutresInformations } from 'app/shared/model/autres-informations.model';

describe('Component Tests', () => {
    describe('AutresInformations Management Update Component', () => {
        let comp: AutresInformationsUpdateComponent;
        let fixture: ComponentFixture<AutresInformationsUpdateComponent>;
        let service: AutresInformationsService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [AutresInformationsUpdateComponent]
            })
                .overrideTemplate(AutresInformationsUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(AutresInformationsUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AutresInformationsService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new AutresInformations(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.autresInformations = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new AutresInformations();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.autresInformations = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
