import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAccount } from '../interfaces/account.interface';

@Injectable()
export class AccountService {

    private URI = 'api/account/';

    constructor(
        private http: HttpClient
    ) {}

    public query(uuid: string): Observable<IAccount> {
        const params = new HttpParams()
            .append('uid', uuid);

        return this.http.get<IAccount>(this.URI, { params });
    }
}
