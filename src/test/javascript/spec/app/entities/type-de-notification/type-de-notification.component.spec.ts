/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { FormationSofTestModule } from '../../../test.module';
import { TypeDeNotificationComponent } from 'app/entities/type-de-notification/type-de-notification.component';
import { TypeDeNotificationService } from 'app/entities/type-de-notification/type-de-notification.service';
import { TypeDeNotification } from 'app/shared/model/type-de-notification.model';

describe('Component Tests', () => {
    describe('TypeDeNotification Management Component', () => {
        let comp: TypeDeNotificationComponent;
        let fixture: ComponentFixture<TypeDeNotificationComponent>;
        let service: TypeDeNotificationService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [TypeDeNotificationComponent],
                providers: []
            })
                .overrideTemplate(TypeDeNotificationComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(TypeDeNotificationComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TypeDeNotificationService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new TypeDeNotification(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.typeDeNotifications[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
