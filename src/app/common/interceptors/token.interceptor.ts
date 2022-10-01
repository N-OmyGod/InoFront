import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private storageService: StorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let acessToken = this.storageService.get('acessToken')
     console.log(acessToken)
      request=request.clone(
        {
          setHeaders:{ 
            Authorization: `Bearer ${acessToken?acessToken:''}`
          }
        }
      )

    
    
    return next.handle(request);
  }
}
