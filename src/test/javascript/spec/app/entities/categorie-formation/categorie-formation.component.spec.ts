/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { FormationSofTestModule } from '../../../test.module';
import { CategorieFormationComponent } from 'app/entities/categorie-formation/categorie-formation.component';
import { CategorieFormationService } from 'app/entities/categorie-formation/categorie-formation.service';
import { CategorieFormation } from 'app/shared/model/categorie-formation.model';

describe('Component Tests', () => {
    describe('CategorieFormation Management Component', () => {
        let comp: CategorieFormationComponent;
        let fixture: ComponentFixture<CategorieFormationComponent>;
        let service: CategorieFormationService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormationSofTestModule],
                declarations: [CategorieFormationComponent],
                providers: []
            })
                .overrideTemplate(CategorieFormationComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(CategorieFormationComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CategorieFormationService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new CategorieFormation(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.categorieFormations[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
