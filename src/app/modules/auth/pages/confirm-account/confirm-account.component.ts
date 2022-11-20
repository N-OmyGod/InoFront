import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddUserCodeDto } from 'src/app/common/interfaces/dto/code.dto';
import { AuthService } from 'src/app/common/services/auth/auth.service';
import { StorageService } from 'src/app/common/services/storage.service';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.component.html',
  styleUrls: ['./confirm-account.component.scss']
})
export class ConfirmAccountComponent implements OnInit {
  form: FormGroup;
  
  constructor(private fB: FormBuilder,
    private authService: AuthService,
    private router:Router,
    private storageService: StorageService) {
    this.form = this.fB.group({
      code: ['', Validators.required],
    })
   }

  ngOnInit(): void {
    let token = this.storageService.get('accessToken');
    if (token && token != '')
      this.router.navigate(['cars']);
  }

  submit(): void{
    const userEmail=this.authService.userEmail.value;
    if (this.form.valid && userEmail!=''){
      const body: AddUserCodeDto = {...this.form.value}
      body.email=userEmail;
      this.authService.confirm(body)
      .subscribe(
        (res) =>{
          this.router.navigate(['add-password']) //переход на другую страницу
          console.log(res)
        }
      )
    } else {
      console.log()
    }  
  }

}
