import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class TokeninterceptorService implements HttpInterceptor  {

  constructor(public userSer:UserService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log("Request on it way!");
      var tokenReq=req.clone({
        setHeaders:{
          myauthtoken:(this.userSer.loginToken()) ? this.userSer.loginToken() :""
        }
      })
      return next.handle(tokenReq);
  }
}
 