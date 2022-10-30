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
  
  constructor(private fB: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private router:Router ) {
    this.form = this.fB.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  submit(): void{
    if (this.form.valid){
      const body: LoginDto = {...this.form.value}
      this.authService.login(body)
      .subscribe(
        (res) =>{
          this.storageService.set('accessToken', res.result!.accessToken)
          this.storageService.set('refreshToken', res.result!.refreshToken)
          this.router.navigate(['profile']) //переход на другую страницу
          console.log(res)
        }
      )
    } else {
      console.log()
    }  
  }

}
