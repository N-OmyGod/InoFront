import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiCarModel } from '../../interfaces/models/api-car.model';
import { ApiResponse } from '../../interfaces/models/api-response.model';
import { ApiCarDetailsModel } from '../../interfaces/models/api-car-details.model';

@Injectable({
  providedIn: 'root'
})
export class GarageService {

  url: string = environment.backendUrl+'api/v1/cars/';
  userEmail : BehaviorSubject<string>=new BehaviorSubject('nuzdenova@sfedu.ru');
 

  constructor(private http: HttpClient) { }

  cars(): Observable<ApiResponse<ApiCarModel>>{
    return this.http.get<ApiResponse<ApiCarModel>>(this.url)
  }

  getCarById(id: number): Observable<ApiCarDetailsModel>{
    return this.http.get<ApiCarDetailsModel>(this.url+'car-characteristics', {
      params: {
        id
      }
    })
  }
}
