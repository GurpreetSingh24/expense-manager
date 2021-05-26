import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const API_KEY = '123456';
    return next.handle(httpRequest.clone({ setHeaders: { API_KEY } }));
  }
}




// @Injectable()
// export class fwcAPIInterceptor implements HttpInterceptor {
//   intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//   const authReq = req.clone({
//     headers: new HttpHeaders({
//       'Content-Type':  'application/json',
//       'Authorization': 'my-auth-token'
//     })
//   });

//   console.log('Intercepted HTTP call', authReq);

//   return next.handle(authReq);
// }