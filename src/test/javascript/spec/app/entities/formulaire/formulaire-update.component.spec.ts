/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { FormationSofTestModule } from '../../../test.module';
import { FormulaireUpdateComponent } from 'app/entities/formulaire/formulaire-update.component';
import { FormulaireService } from 'app/entities/formulaire/formulaire.service';
import { Formulaire } from 'app/shared/model/formulaire.model';

describe('Component Tests', () => {
    describe('Formulaire Management Update Component', () => {
        let comp: FormulaireUpdateComponent;
        let fixture: ComponentFixture<FormulaireUpdateComponent>;
        let service: FormulaireService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [FormulaireUpdateComponent]
            })
                .overrideTemplate(FormulaireUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(FormulaireUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FormulaireService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Formulaire(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.formulaire = entity;
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
                    const entity = new Formulaire();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.formulaire = entity;
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
