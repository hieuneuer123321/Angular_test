import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService.isLoggedIn()) {
      const authToken = this.authService.getAuthorizationToken();
      req = req.clone({
        setHeaders: { Authorization: authToken },
      });
    }

    return next.handle(req);
  }
}
