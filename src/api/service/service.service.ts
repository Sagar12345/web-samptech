import { Url } from './../api.constant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable()
export class ServicesService {
    private appUrl: string;
    constructor(private urlservice: Url, private httpClient: HttpClient) {
        this.appUrl = this.urlservice.baseurl;
    }

    getService() {
        return this.httpClient.get(this.appUrl + '/web/uService').toPromise().then(res => res).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}