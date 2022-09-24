import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDto } from 'src/app/common/interfaces/dto/login.dto';
import { AuthService } from 'src/app/common/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  
  constructor(private fB: FormBuilder,
    private authService: AuthService) {
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
          console.log(res)
        }
      )
    } else {
      console.log()
    }  
  }

}
