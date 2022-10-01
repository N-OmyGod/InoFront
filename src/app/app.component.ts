import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './common/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'InoFront';
  isLoading = true;

  constructor(private spinnerService: SpinnerService){}

  ngOnInit(): void {
    this.spinnerService.$showSpinner
    .subscribe((res) => {
      this.isLoading = res;
    })
  }
}
