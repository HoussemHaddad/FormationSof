import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITypeDeNotification } from 'app/shared/model/type-de-notification.model';

type EntityResponseType = HttpResponse<ITypeDeNotification>;
type EntityArrayResponseType = HttpResponse<ITypeDeNotification[]>;

@Injectable({ providedIn: 'root' })
export class TypeDeNotificationService {
    private resourceUrl = SERVER_API_URL + 'api/type-de-notifications';

    constructor(private http: HttpClient) {}

    create(typeDeNotification: ITypeDeNotification): Observable<EntityResponseType> {
        return this.http.post<ITypeDeNotification>(this.resourceUrl, typeDeNotification, { observe: 'response' });
    }

    update(typeDeNotification: ITypeDeNotification): Observable<EntityResponseType> {
        return this.http.put<ITypeDeNotification>(this.resourceUrl, typeDeNotification, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ITypeDeNotification>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ITypeDeNotification[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
