import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiCarDetailsModel } from 'src/app/common/interfaces/models/api-car-details.model';

@Component({
  selector: 'app-view-car-dialog',
  templateUrl: './view-car-dialog.component.html',
  styleUrls: ['./view-car-dialog.component.scss']
})
export class ViewCarDialogComponent implements OnInit {
  // carDetails: ApiCarDetailsModel | null = {
  //   id: 1,
  //   mark: 'BMW',
  //   model: 'M3',
  //   year: new Date,
  //   stateNumber: '1ААА11161',
  //   transmission?: number,
  //   engineType?: string,
  //   drive?: string,
  //   mileage: number,

  //   vin: string,

  //   seriaCTC: string,
  //   numberCTC: number,
  //   dateCTC: new Date
  // }
  constructor(
    public dialogRef: MatDialogRef<ViewCarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,) { }

  ngOnInit(): void {
  }

  close(): void{
    this.dialogRef.close();
  }

}
