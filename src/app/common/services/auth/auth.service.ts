import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddUserCodeDto } from '../../interfaces/dto/code.dto';
import { LoginDto } from '../../interfaces/dto/login.dto';
import { AddPasswordDto } from '../../interfaces/dto/password.dto';
import { RegistrationDto } from '../../interfaces/dto/registration.dto';
import { ApiResponseMessage } from '../../interfaces/models/api-response-message.model';
import { TokensModel } from '../../interfaces/models/tokens.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = environment.backendUrl+'api/v1/user/';
  userEmail : BehaviorSubject<string>=new BehaviorSubject('');
  showText: BehaviorSubject<boolean>=new BehaviorSubject(true);
  constructor(private http: HttpClient) { }

  login(body: LoginDto): Observable<ApiResponseMessage<TokensModel>>{
    return this.http.post<ApiResponseMessage<TokensModel>>(this.url+'login', body)
  }

  registration(body:RegistrationDto): Observable<ApiResponseMessage<boolean>>{
    console.log(body)
    return this.http.post<ApiResponseMessage<boolean>>(this.url+'registration', body)
  }

  confirm(body:AddUserCodeDto): Observable<ApiResponseMessage<boolean>>{
    return this.http.post<ApiResponseMessage<boolean>>(this.url+'confirm', body)
  }

  password(body:AddPasswordDto): Observable<ApiResponseMessage<TokensModel>>{
    return this.http.post<ApiResponseMessage<TokensModel>>(this.url, body)
  }
}
