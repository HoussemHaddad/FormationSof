import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ICentreDeFormation } from 'app/shared/model/centre-de-formation.model';

type EntityResponseType = HttpResponse<ICentreDeFormation>;
type EntityArrayResponseType = HttpResponse<ICentreDeFormation[]>;

@Injectable({ providedIn: 'root' })
export class CentreDeFormationService {
    private resourceUrl = SERVER_API_URL + 'api/centre-de-formations';

    constructor(private http: HttpClient) {}

    create(centreDeFormation: ICentreDeFormation): Observable<EntityResponseType> {
        return this.http.post<ICentreDeFormation>(this.resourceUrl, centreDeFormation, { observe: 'response' });
    }

    update(centreDeFormation: ICentreDeFormation): Observable<EntityResponseType> {
        return this.http.put<ICentreDeFormation>(this.resourceUrl, centreDeFormation, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ICentreDeFormation>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ICentreDeFormation[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
