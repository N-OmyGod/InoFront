import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateCertificateDTO } from '../../interfaces/dto/create-certificate.dto';
import { ApiResponseMessage } from '../../interfaces/models/api-response-message.model';

@Injectable({
  providedIn: 'root'
})
export class CarCertificateService {
  url: string = environment.backendUrl+'api/v1/carCertificates/';
  constructor(private http:HttpClient) { }

  addCarCertificate(body: CreateCertificateDTO): Observable<ApiResponseMessage<number>> {
    return this.http.post<ApiResponseMessage<number>>(this.url, body);
  }

  deleteCar(carCertificateId: number, removeCarReason: number): Observable<boolean>{
    return this.http.delete<boolean>(`${this.url}${carCertificateId}/${removeCarReason}`);
  }

}
