import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiCarModel } from '../../interfaces/models/api-car.model';
import { ApiResponse } from '../../interfaces/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class GarageService {

  url: string = environment.backendUrl+'api/v1/user/';
  userEmail : BehaviorSubject<string>=new BehaviorSubject('nuzdenova@sfedu.ru');
 

  constructor(private http: HttpClient) { }

  cars(): Observable<ApiResponse<ApiCarModel>>{
    return this.http.get<ApiResponse<ApiCarModel>>(this.url+'cars')
  }

}
