import { Url } from './../api.constant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable()
export class CareerService {
    private appUrl: string;
    constructor(private urlservice: Url, private httpClient: HttpClient) {
        this.appUrl = this.urlservice.baseurl;
    }

    addContact(reqdata) {
        return this.httpClient.post(this.appUrl + '/web/uHire', reqdata).toPromise().then(res => res).catch(this.handleError);
    }

    getCareer() {
        return this.httpClient.get(this.appUrl + '/web/uHire').toPromise().then(res => res).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}