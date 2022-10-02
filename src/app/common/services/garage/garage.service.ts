import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiCarModel } from '../../interfaces/models/api-car.model';
import { ApiResponse } from '../../interfaces/models/api-response.model';
import { ApiCarDetailsModel } from '../../interfaces/models/api-car-details.model';
import { UpdateCarDto } from '../../interfaces/dto/car.dto';
import { ApiResponseMessage } from '../../interfaces/models/api-response-message.model';

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

  deleteCar(carCertificateId: number, removeCarReason: number): Observable<boolean>{
    return this.http.delete<boolean>(`${this.url}${carCertificateId}/${removeCarReason}`);
  }

  updateCar(carId: number, dto: UpdateCarDto): Observable<ApiResponseMessage<boolean>>{
    return this.http.put<ApiResponseMessage<boolean>>(`${this.url}${carId}`, dto);
  }
}
