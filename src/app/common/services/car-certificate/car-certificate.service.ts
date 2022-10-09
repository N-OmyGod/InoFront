import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarCertificateService {
  url: string = environment.backendUrl+'api/v1/carCertificates/';
  constructor(private http:HttpClient) { }
  deleteCar(carCertificateId: number, removeCarReason: number): Observable<boolean>{
    return this.http.delete<boolean>(`${this.url}${carCertificateId}/${removeCarReason}`);
  }

}
