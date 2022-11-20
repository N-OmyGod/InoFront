import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { AddPasswordDto } from 'src/app/common/interfaces/dto/password.dto';
import { AuthService } from 'src/app/common/services/auth/auth.service';
import { StorageService } from 'src/app/common/services/storage.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})

export class PasswordComponent implements OnInit {
  form: FormGroup;

  showPassword: boolean = false;
  showPassword2: boolean = false;
  
  constructor(private fB: FormBuilder,
    private authService: AuthService,
    private router:Router,
    private storageService: StorageService,
    private toastr: ToastrService) {
    this.form = this.fB.group({
      password: ['',Validators.compose([Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])\S{8,15}$/)])],
      confirmPassword: ['', Validators.required],
    })
   }
   
   get passwordIsValid(): boolean{
    const password = this.form.get('password');
    return !(password!.invalid && (password!.dirty || password!.touched))
   }

   get confirmPasswordIsValid(): boolean{
    const password = this.form.get('confirmPassword');
    return !(password!.invalid && (password!.dirty || password!.touched))
   }

  ngOnInit(): void {
    let token = this.storageService.get('accessToken');
    if (token && token != '')
      this.router.navigate(['cars']);
  }

  submit(): void{
    const userEmail=this.authService.userEmail.value;
    if (this.form.valid && userEmail != ''){

      const body: AddPasswordDto = {...this.form.value}
      body.email=userEmail;

      if (body.password !== body.confirmPassword){
        this.toastr.error('Пароли не совпадают');
      }

      this.authService.password(body)
      .subscribe(
        (res) =>{
          this.router.navigate(['']) //переход на другую страницу
          console.log(res)
        }
      )
    } else {
      console.log()
    }  
  }

}
