import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiCarDetailsModel } from 'src/app/common/interfaces/models/api-car-details.model';
import { CarCertificateService } from 'src/app/common/services/car-certificate/car-certificate.service';
import { GarageService } from 'src/app/common/services/garage/garage.service';

@Component({
  selector: 'app-delete-car-dialog',
  templateUrl: './delete-car-dialog.component.html',
  styleUrls: ['./delete-car-dialog.component.scss']
})
export class DeleteCarDialogComponent implements OnInit {
  carDetails: ApiCarDetailsModel | null = null;
  
  constructor(private carService: GarageService,
    public dialogRef: MatDialogRef<DeleteCarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private certificatesService: CarCertificateService) { }

  ngOnInit(): void {
    console.log(this.data)
    this.load();
  }

  load(): void{
    this.carService.getCarById(this.data.id)
    .pipe(
    )
    .subscribe((res) => {
      this.carDetails = res;
      console.log(this.carDetails);
    });
  }

  delete(): void{
    if (this.carDetails){
      this.certificatesService.deleteCar(this.carDetails.certificateId, 1)
      .subscribe((res) => {
        this.close(true);
      });
    }

  }

  close(resultValue: boolean): void{
    this.dialogRef.close(resultValue);
  }
}
