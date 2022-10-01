import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GarageService } from 'src/app/common/services/garage/garage.service';

@Component({
  selector: 'app-user-garage',
  templateUrl: './user-garage.component.html',
  styleUrls: ['./user-garage.component.scss']
})

export class UserGarageComponent implements OnInit {
  form: FormGroup;
  
  constructor(private fB: FormBuilder,
    private garageService: GarageService,
    private router:Router ) {
    this.form = this.fB.group({
      
    })
   }

  ngOnInit(): void {
    this.reload()
  }

  reload():void{

  this.garageService.cars().subscribe((res)=>{
    
    console.log(res)

  })
}
  submit(): void{
    if (this.form.valid){
    
      this.garageService.cars()
      .subscribe(
        (res) =>{
          
          this.router.navigate(['confirm']) //переход на другую страницу
          console.log(res)
        }
      )
    } else {
      console.log('Form is not valid')
    }

  }

}
