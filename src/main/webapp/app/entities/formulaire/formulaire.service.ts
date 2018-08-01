import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IFormulaire } from 'app/shared/model/formulaire.model';

type EntityResponseType = HttpResponse<IFormulaire>;
type EntityArrayResponseType = HttpResponse<IFormulaire[]>;

@Injectable({ providedIn: 'root' })
export class FormulaireService {
    private resourceUrl = SERVER_API_URL + 'api/formulaires';

    constructor(private http: HttpClient) {}

    create(formulaire: IFormulaire): Observable<EntityResponseType> {
        return this.http.post<IFormulaire>(this.resourceUrl, formulaire, { observe: 'response' });
    }

    update(formulaire: IFormulaire): Observable<EntityResponseType> {
        return this.http.put<IFormulaire>(this.resourceUrl, formulaire, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IFormulaire>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IFormulaire[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
