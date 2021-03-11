import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}
  numLlamadas = 0;
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.setCargando(true);
    this.numLlamadas++;
    return next.handle(request).pipe(
      finalize(() => {
        this.numLlamadas--;
        if (this.numLlamadas === 0) {
          this.loadingService.setCargando(false);
        }
      })
    );
  }
}
