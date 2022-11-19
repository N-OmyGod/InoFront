import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddPasswordDto } from 'src/app/common/interfaces/dto/password.dto';
import { AuthService } from 'src/app/common/services/auth/auth.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})

export class PasswordComponent implements OnInit {
  form: FormGroup;
  
  constructor(private fB: FormBuilder,
    private authService: AuthService,
    private router:Router ) {
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
    this.form.get('password')?.valueChanges
    .subscribe((res) => {
      console.log(this.form.get('password'));
    })
  }

  submit(): void{
    const userEmail=this.authService.userEmail.value;
    if (this.form.valid && userEmail != ''){
      const body: AddPasswordDto = {...this.form.value}
      body.email=userEmail;
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
