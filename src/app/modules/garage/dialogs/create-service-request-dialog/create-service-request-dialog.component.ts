import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { VisitReasonTypes } from 'src/app/common/enums/visit-reason-types.enum';
import { CreateServiceRequestDto } from 'src/app/common/interfaces/dto/create-service-request.dto';
import { DealershipModel } from 'src/app/common/interfaces/models/api-models/dealership.model';
import { ServiceConsultantModel } from 'src/app/common/interfaces/models/api-models/service-consultant.model';
import { TimeSlotModel } from 'src/app/common/interfaces/models/api-models/timeslot.model';
import { VisitReasonModel } from 'src/app/common/interfaces/models/api-models/visit-reason.model';
import { ServiceRequestService } from 'src/app/common/services/service-request/service-request.service';

@Component({
  selector: 'app-create-service-request-dialog',
  templateUrl: './create-service-request-dialog.component.html',
  styleUrls: ['./create-service-request-dialog.component.scss']
})
export class CreateServiceRequestDialogComponent implements OnInit {
  dealerships: DealershipModel[] = [];
  visitReasons: VisitReasonModel[] = [];
  serviceConsultants: ServiceConsultantModel[] = [];
  timeslots: TimeSlotModel[] = [];
  
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<CreateServiceRequestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public carId: number,
    private fb: FormBuilder,
    private service: ServiceRequestService) {
      this.form = this.fb.group({
        dealerShipId: '',
        visitReasonId: '',
        mileage: '',
        serviceConsultantId: '',
        timeSlotId: '',
        comment: ''
      })
     }

  ngOnInit(): void {
  }

  loadCar(): void{

  }

  saveServiceRequest(): void{
    if (this.form.valid){
      let body: CreateServiceRequestDto = {
        carId: this.carId,
        ...this.form.value
      }

      this.service.createServiceRequest(body)
      .pipe(
        finalize(()=> this.close(true))
      )
      .subscribe()
    }

  }

  close(value: boolean): void{
    this.dialogRef.close(value);
  }

}
