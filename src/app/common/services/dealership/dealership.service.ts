import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiDealershipModel } from '../../interfaces/models/api-dealership.model';
import { ApiResponse } from '../../interfaces/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class DealershipService {
  url: string = environment.backendUrl+'api/v1/dealerships/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<ApiResponse<ApiDealershipModel>>{
    return this.http.get<ApiResponse<ApiDealershipModel>>(this.url);
  }
}
