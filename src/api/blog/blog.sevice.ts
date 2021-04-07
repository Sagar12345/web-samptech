import { Url } from './../api.constant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable()
export class BlogService {
    private appUrl: string;
    constructor(private urlservice: Url, private httpClient: HttpClient) {
        this.appUrl = this.urlservice.baseurl;
    }

    getBlogs(reqData) {
        return this.httpClient.post(this.appUrl + '/ui/uPageBlog/get', reqData).toPromise().then(res => res).catch(this.handleError);
    }


    getBlog(reqData) {
        return this.httpClient.get(this.appUrl + '/ui/uPageBlog/' + reqData).toPromise().then(res => res).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}