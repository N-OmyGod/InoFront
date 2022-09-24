import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationDto } from 'src/app/common/interfaces/dto/registration.dto';
import { AuthService } from 'src/app/common/services/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  
  constructor(private fB: FormBuilder,
    private authService: AuthService) {
    this.form = this.fB.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      patronymic: '',
      email: ['', Validators.compose([Validators.email, Validators.required])],
      dateBirth: ['', Validators.required],
      city: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  submit(): void{
    if (this.form.valid){
      const body: RegistrationDto = {...this.form.value}
      this.authService.registration(body)
      .subscribe(
        (res) =>{
          console.log(res)
        }
      )
    } else {
      console.log('Form is not valid')
    }

  }

}
