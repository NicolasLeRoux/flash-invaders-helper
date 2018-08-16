import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IAccount } from '../interfaces/account.interface';

@Injectable()
export class AccountService {

    private URI = 'http://space-invaders.com/api/account/';

    constructor(
        private http: HttpClient
    ) {}

    public query(uuid: string): Observable<IAccount> {
        const params = new HttpParams()
            .append('uid', uuid);
        const headers = new HttpHeaders()
            .append('Access-Control-Allow-Origin', '*');

        return this.http.get<IAccount>(this.URI, { headers, params });
    }
}
