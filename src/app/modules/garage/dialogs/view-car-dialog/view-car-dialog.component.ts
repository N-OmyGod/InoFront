import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { CarDriveConsts, CarEngineConsts, CarTransmissionConsts } from 'src/app/common/constants/car-details.const';
import { ApiCarDetailsModel, DriveType, EngineType, TransmissionType } from 'src/app/common/interfaces/models/api-car-details.model';
import { GarageService } from 'src/app/common/services/garage/garage.service';
import { SpinnerService } from 'src/app/common/services/spinner.service';

@Component({
  selector: 'app-view-car-dialog',
  templateUrl: './view-car-dialog.component.html',
  styleUrls: ['./view-car-dialog.component.scss']
})
export class ViewCarDialogComponent implements OnInit {

  carDetails: ApiCarDetailsModel | null = {
    id: 1,
    mark: 'BMW',
    model: 'M3',
    year: new Date(),
    stateNumber: '1ААА11161',
    transmission: TransmissionType.Automatic,
    engineType: EngineType.Diesel,
    drive: DriveType.AWD,
    mileage: 234423,
  }

  transmissions = CarTransmissionConsts;
  drives = CarDriveConsts;
  engines = CarEngineConsts;

  constructor(
    public dialogRef: MatDialogRef<ViewCarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private carService: GarageService,
    private spinner: SpinnerService ) { }

  ngOnInit(): void {
    this.loadCar();
  }

  loadCar(): void{
    this.spinner.show();
    this.carService.getCarById(this.data)
    .pipe(
      finalize(()=> {
        this.spinner.hide();
      })
    )
    .subscribe((res) => {
      this.carDetails = res;
    });
  }

  close(): void{
    this.dialogRef.close();
  }

}
