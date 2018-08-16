import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFlashes } from '../interfaces/flashes.interface';

@Injectable()
export class FlashesService {

    private URI = 'api/flashes/';

    constructor(
        private http: HttpClient
    ) {}

    public query(uuid: string): Observable<IFlashes> {
        const params = new HttpParams()
            .append('uid', uuid);

        return this.http.get<IFlashes>(this.URI, { params });
    }
}
