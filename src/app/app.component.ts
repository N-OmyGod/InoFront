import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './common/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InoFront';
  isLoading = false;

  constructor(private spinnerService: SpinnerService){}

  // ngOnInit(): void {
  //   this.spinnerService.$showSpinner
  //   .subscribe((res) => {
  //     this.isLoading = res;
  //   })
  // }
}
