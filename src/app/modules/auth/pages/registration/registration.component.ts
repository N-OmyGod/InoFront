import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private authService: AuthService,
    private router:Router,
    private toastr: ToastrService) {
    this.form = this.fB.group({
      firstName: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      lastName: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      patronymic: ['', Validators.maxLength(50)],
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
          this.authService.userEmail.next(body.email);
          this.router.navigate(['confirm']) //переход на другую страницу
          console.log(res)
        }
      )
    } else {
      console.log('Form is not valid');
      this.toastr.error('Invalid')
    }

  }

}
