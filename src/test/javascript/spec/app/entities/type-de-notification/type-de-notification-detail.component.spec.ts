/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { FormationSofTestModule } from '../../../test.module';
import { TypeDeNotificationDetailComponent } from 'app/entities/type-de-notification/type-de-notification-detail.component';
import { TypeDeNotification } from 'app/shared/model/type-de-notification.model';

describe('Component Tests', () => {
    describe('TypeDeNotification Management Detail Component', () => {
        let comp: TypeDeNotificationDetailComponent;
        let fixture: ComponentFixture<TypeDeNotificationDetailComponent>;
        const route = ({ data: of({ typeDeNotification: new TypeDeNotification(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [TypeDeNotificationDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(TypeDeNotificationDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(TypeDeNotificationDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.typeDeNotification).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
