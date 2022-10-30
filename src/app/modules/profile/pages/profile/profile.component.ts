import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileModel } from 'src/app/common/interfaces/models/api-models/profile.model';
import { ProfileService } from 'src/app/common/services/profile/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  editMode: boolean = false;
  profileModel: ProfileModel | null = null;
  form: FormGroup;
  constructor(private service: ProfileService,
    private fb: FormBuilder,
    private router: Router) { 
      this.form = this.fb.group(
        {
          firstName: null,
          lastName: null,
          patronymic: null,
          email: null,
          dateBirth: null,
          city: null,
        }
      )
  }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void{
    this.service.getUserProfile()
    .subscribe((res)=>{
      if (res.isSuccess && res.result){
        
       

        this.profileModel = res.result;
        this.form.patchValue(res.result);
       
      }
    })
  }

  updateProfile(): void{
    if (this.form.valid){
      const body = this.form.getRawValue();

      this.service.updateProfile(body)
      .subscribe((res) => {
        if (res.isSuccess){
          this.loadProfile();
        }
      })
    }
  }

  changeMode(value: boolean): void{
    this.editMode = value;

    if (!value && this.profileModel){
      this.form.patchValue(this.profileModel);
    }
  }

  logout(): void{
    this.service.logout();
    this.router.navigate(['/', 'auth']);
  }
}
