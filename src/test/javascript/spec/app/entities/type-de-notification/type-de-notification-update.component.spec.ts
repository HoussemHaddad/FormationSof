/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { FormationSofTestModule } from '../../../test.module';
import { TypeDeNotificationUpdateComponent } from 'app/entities/type-de-notification/type-de-notification-update.component';
import { TypeDeNotificationService } from 'app/entities/type-de-notification/type-de-notification.service';
import { TypeDeNotification } from 'app/shared/model/type-de-notification.model';

describe('Component Tests', () => {
    describe('TypeDeNotification Management Update Component', () => {
        let comp: TypeDeNotificationUpdateComponent;
        let fixture: ComponentFixture<TypeDeNotificationUpdateComponent>;
        let service: TypeDeNotificationService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [TypeDeNotificationUpdateComponent]
            })
                .overrideTemplate(TypeDeNotificationUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(TypeDeNotificationUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TypeDeNotificationService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new TypeDeNotification(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.typeDeNotification = entity;
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
                    const entity = new TypeDeNotification();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.typeDeNotification = entity;
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
