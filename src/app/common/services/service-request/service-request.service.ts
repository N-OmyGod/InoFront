import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateServiceRequestDto } from '../../interfaces/dto/create-service-request.dto';
import { DealershipModel } from '../../interfaces/models/api-models/dealership.model';
import { ServiceConsultantModel } from '../../interfaces/models/api-models/service-consultant.model';
import { TimeSlotModel } from '../../interfaces/models/api-models/timeslot.model';
import { VisitReasonModel } from '../../interfaces/models/api-models/visit-reason.model';
import { ApiResponseMessage } from '../../interfaces/models/api-response-message.model';
import { ApiResponse } from '../../interfaces/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestService {
  url = environment.backendUrl+'api/v1/';

  constructor(private http: HttpClient) { }

  createServiceRequest(body: CreateServiceRequestDto): Observable<any>{
    return this.http.post(this.url+'serviceRequests', body);
  }

  getDealerships(city: string, carId: number): Observable<ApiResponse<DealershipModel>>{
    return this.http.get<ApiResponse<DealershipModel>>(`${this.url}'dealerships/'${city}'/${carId}}`);
  }

  getServiceConsultants(dealershipId: number): Observable<ApiResponse<ServiceConsultantModel>>{
    return this.http.get<ApiResponse<ServiceConsultantModel>>(`${this.url}'dealerships/'${dealershipId}'/consultants}`);
  }

  getVisitReasons(): Observable<ApiResponse<VisitReasonModel>>{
    return this.http.get<ApiResponse<VisitReasonModel>>(this.url+'visitReasons');
  }

  getTimeSlots(serviceConsultantId: number ): Observable<ApiResponse<TimeSlotModel>>{
    return this.http.get<ApiResponse<TimeSlotModel>>(`${this.url}'serviceConsultants/'${serviceConsultantId}'/time-slots}`);
  }
}
