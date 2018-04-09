import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import {Observable} from "rxjs/Observable";

export class AddHeaderInterceptor implements HttpInterceptor {
  private token:string;
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req)
    this.token="Bearer 8ee430da-53d8-3aa6-9d56-b8fd356f150c";
    /*if(req.url.indexOf("token") > 0){
      this.token="Basic eklSMktvZUZtUmhEdWwwVktzMVJhcmFVWWNVYTpKSUYwdVhMUWZEOHc3ZTVNRXFpT0lHaVdtdkFh";
      req.headers.set('Content-Type', 'application/x-www-form-urlencoded')
    }
    else{

    }*/
    if(req.url.indexOf("assets") < 0){
      const clonedRequest = req.clone({ headers: req.headers.set('Authorization', this.token), responseType: 'text' });

      console.log(req.headers.get('Authorization'))

      return next.handle(clonedRequest);
    }
    return next.handle(req);
  }
}
