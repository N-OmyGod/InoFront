import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditOrViewDialog } from 'src/app/common/interfaces/dialog-interfaces/dialog.interface';
import { CarCertificateService } from 'src/app/common/services/car-certificate/car-certificate.service';
import { ViewCarDialogComponent } from '../view-car-dialog/view-car-dialog.component';

@Component({
  selector: 'app-create-car-dialog',
  templateUrl: './create-car-dialog.component.html',
  styleUrls: ['./create-car-dialog.component.scss']
})
export class CreateCarDialogComponent implements OnInit {

  carCertificateTitle: string = 'Сертификат автомобиля';

  certificateForm: FormGroup;
  constructor(
    private ref: MatDialogRef<CreateCarDialogComponent>,
    private fb: FormBuilder,
    private service: CarCertificateService,
    private dialog: MatDialog
  ) {
    this.certificateForm = this.fb.group({
      VIN: [null , Validators.compose([Validators.required, Validators.pattern(/[A-HJ-NPR-Z0-9]{13}[0-9]{4}/)])],
      SeriaCTC: [null , Validators.compose([Validators.required, Validators.pattern(/^([0-9]{2}[[A-Z0-9]{2})?$/)])],
      NumberCTC: [null , Validators.compose([Validators.required, Validators.pattern(/^([0-9]{6})?$/)])],
      DateCTC: [null , Validators.required]
    })
   }

  ngOnInit(): void {
  }

  close(reloadParent: boolean): void{
    this.ref.close(reloadParent);
  }

  save(): void{
    if (this.certificateForm.valid){
      const dto = this.certificateForm.getRawValue();

      this.service.addCarCertificate(dto)
      .subscribe((res) => {
        if (res.result){
          this.openCarDialog(res.result);
        }
      });
    }
  }

  openCarDialog(id: number): void{
    let data: EditOrViewDialog = {
      certificateId: id,
      edit: true,
    }

    this.dialog.open(ViewCarDialogComponent, {
      width: '750px',
      height: '500px',
      data
    })
    .afterClosed()
    .subscribe(value => {
      this.close(value);
    });

  }
}
