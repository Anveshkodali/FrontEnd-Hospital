import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class authInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const userTokenData = JSON.parse(sessionStorage.getItem('userAuthToken'));  // Get user token from session storage
        const doctorTokenData = JSON.parse(sessionStorage.getItem('doctorAuthToken'));  // Get doctor token from session storage

        let modifiedReq = req;
        if (userTokenData && userTokenData.token) {
            modifiedReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${userTokenData.token}`
                }
            });
        } else if (doctorTokenData && doctorTokenData.token) {
            modifiedReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${doctorTokenData.token}`
                }
            });
        }

        return next.handle(modifiedReq);
    }
}
