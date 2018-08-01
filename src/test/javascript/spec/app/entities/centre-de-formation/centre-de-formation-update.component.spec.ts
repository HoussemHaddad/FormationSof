/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { FormationSofTestModule } from '../../../test.module';
import { CentreDeFormationUpdateComponent } from 'app/entities/centre-de-formation/centre-de-formation-update.component';
import { CentreDeFormationService } from 'app/entities/centre-de-formation/centre-de-formation.service';
import { CentreDeFormation } from 'app/shared/model/centre-de-formation.model';

describe('Component Tests', () => {
    describe('CentreDeFormation Management Update Component', () => {
        let comp: CentreDeFormationUpdateComponent;
        let fixture: ComponentFixture<CentreDeFormationUpdateComponent>;
        let service: CentreDeFormationService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [CentreDeFormationUpdateComponent]
            })
                .overrideTemplate(CentreDeFormationUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(CentreDeFormationUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CentreDeFormationService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new CentreDeFormation(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.centreDeFormation = entity;
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
                    const entity = new CentreDeFormation();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.centreDeFormation = entity;
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
