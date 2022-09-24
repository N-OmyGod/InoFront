import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegistrationDto } from '../../interfaces/dto/registration.dto';
import { ApiResponseMessage } from '../../interfaces/models/api-response-message.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = environment.backendUrl;
  constructor(private http:HttpClient) { }

  registration(body:RegistrationDto): Observable<ApiResponseMessage<boolean>>{
    return this.http.post<ApiResponseMessage<boolean>>(this.url, body)
   
  }
}
