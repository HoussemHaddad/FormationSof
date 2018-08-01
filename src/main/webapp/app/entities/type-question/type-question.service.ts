import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITypeQuestion } from 'app/shared/model/type-question.model';

type EntityResponseType = HttpResponse<ITypeQuestion>;
type EntityArrayResponseType = HttpResponse<ITypeQuestion[]>;

@Injectable({ providedIn: 'root' })
export class TypeQuestionService {
    private resourceUrl = SERVER_API_URL + 'api/type-questions';

    constructor(private http: HttpClient) {}

    create(typeQuestion: ITypeQuestion): Observable<EntityResponseType> {
        return this.http.post<ITypeQuestion>(this.resourceUrl, typeQuestion, { observe: 'response' });
    }

    update(typeQuestion: ITypeQuestion): Observable<EntityResponseType> {
        return this.http.put<ITypeQuestion>(this.resourceUrl, typeQuestion, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ITypeQuestion>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ITypeQuestion[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
