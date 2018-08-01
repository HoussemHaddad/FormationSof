import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IAutresInformations } from 'app/shared/model/autres-informations.model';

type EntityResponseType = HttpResponse<IAutresInformations>;
type EntityArrayResponseType = HttpResponse<IAutresInformations[]>;

@Injectable({ providedIn: 'root' })
export class AutresInformationsService {
    private resourceUrl = SERVER_API_URL + 'api/autres-informations';

    constructor(private http: HttpClient) {}

    create(autresInformations: IAutresInformations): Observable<EntityResponseType> {
        return this.http.post<IAutresInformations>(this.resourceUrl, autresInformations, { observe: 'response' });
    }

    update(autresInformations: IAutresInformations): Observable<EntityResponseType> {
        return this.http.put<IAutresInformations>(this.resourceUrl, autresInformations, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IAutresInformations>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IAutresInformations[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
