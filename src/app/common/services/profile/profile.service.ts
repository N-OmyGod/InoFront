import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UpdateProfileDTO } from '../../interfaces/dto/upadte-profile.dto';
import { ProfileModel } from '../../interfaces/models/api-models/profile.model';
import { ApiResponseMessage } from '../../interfaces/models/api-response-message.model';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url: string = environment.backendUrl+'api/v1/user/';
  
  constructor(private http:HttpClient,
    private storageService: StorageService) { }

  getUserProfile(): Observable<ApiResponseMessage<ProfileModel>>{
    return this.http.get<ApiResponseMessage<ProfileModel>>(this.url+'profile');
  }

  updateProfile(body: UpdateProfileDTO): Observable<ApiResponseMessage<boolean>>{
    return this.http.put<ApiResponseMessage<boolean>>(this.url+'profile', body);
  }

  logout(): void{
    this.storageService.remove('accessToken');
  }
}
