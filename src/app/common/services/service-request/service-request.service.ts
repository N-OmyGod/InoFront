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
    console.log(body);
    return this.http.post(this.url+'serviceRequests', body);
  }

  getUserCity():Observable<ApiResponseMessage<string>>{
    return this.http.get<ApiResponseMessage<string>>(this.url+'user/city');
  }
  getDealerships(city: string, carId: number): Observable<ApiResponseMessage<ApiResponse<DealershipModel>>>{
    return this.http.get<ApiResponseMessage<ApiResponse<DealershipModel>>>(`${this.url}dealerships/user/${city}/${carId}`);
  }

  getServiceConsultants(dealershipId: number): Observable<ApiResponseMessage<ApiResponse<ServiceConsultantModel>>>{
    return this.http.get<ApiResponseMessage<ApiResponse<ServiceConsultantModel>>>(`${this.url}dealerships/${dealershipId}/consultants`);
  }

  getVisitReasons(): Observable<ApiResponseMessage<ApiResponse<VisitReasonModel>>>{
    return this.http.get<ApiResponseMessage<ApiResponse<VisitReasonModel>>>(this.url+'visitReasons');
  }

  getTimeSlots(serviceConsultantId: number ): Observable<ApiResponseMessage<ApiResponse<TimeSlotModel>>>{
    return this.http.get<ApiResponseMessage<ApiResponse<TimeSlotModel>>>(`${this.url}serviceConsultants/${serviceConsultantId}/time-slots`);
  }
}
