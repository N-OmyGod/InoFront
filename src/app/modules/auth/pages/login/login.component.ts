import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/common/interfaces/dto/login.dto';
import { AuthService } from 'src/app/common/services/auth/auth.service';
import { StorageService } from 'src/app/common/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  showPassword: boolean = false;
  
  constructor(private fB: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private router:Router ) {
    this.form = this.fB.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])\S{8,15}$/)])],
    })
   }

   get passwordIsValid(): boolean{
    const password = this.form.get('password');
    return !(password!.invalid && (password!.dirty || password!.touched))
   }

  ngOnInit(): void {
    let token = this.storageService.get('accessToken');

    if (token && token != '')
    {
      this.authService.showText.next(false);
      this.router.navigate(['cars']);
    
    }
      else{
           this.authService.showText.next(true);
      }
  }

  submit(): void{
    if (this.form.valid){
      const body: LoginDto = {...this.form.value}
      this.authService.login(body)
      .subscribe(
        (res) =>{
          this.storageService.set('accessToken', res.result!.accessToken)
          this.storageService.set('refreshToken', res.result!.refreshToken)
          this.router.navigate(['']) //переход на другую страницу
        }
      )
    } else {
      console.log()
    }  
  }

}
