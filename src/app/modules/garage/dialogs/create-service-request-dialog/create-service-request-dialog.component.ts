import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize, Subject, takeUntil } from 'rxjs';
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
export class CreateServiceRequestDialogComponent implements OnInit, OnDestroy {
  dealerships: DealershipModel[] = [];
  visitReasons: VisitReasonModel[] = [];
  serviceConsultants: ServiceConsultantModel[] = [];
  timeslots: TimeSlotModel[] = [];
  
  form: FormGroup;

  destroyed: Subject<void> = new Subject<void>();

  constructor(public dialogRef: MatDialogRef<CreateServiceRequestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public carId: any,
    private fb: FormBuilder,
    private service: ServiceRequestService) {
      this.form = this.fb.group({
        dealerShipId: '',
        visitReasonId: '',
        mileage: '',
        serviceConsultantId: '',
        timeSlotId: '',
        comment: '',
        city: ''
      })
     }

  ngOnInit(): void {
    this.getUserCity();
    this.loadVisitReasons();
    this.subscribesOnForm();
  }

  subscribesOnForm(): void{
    this.form.get('city')?.valueChanges
    .pipe(
      takeUntil(this.destroyed)
    )
    .subscribe((val)=>{
      if (val){
        this.loadDillerships(val);
      }
    });

    this.form.get('dealerShipId')?.valueChanges
    .pipe(
      takeUntil(this.destroyed)
    )
    .subscribe((val)=>{
      if (val){
        this.loadServiceConsultants(val);
      }
    });

    this.form.get('serviceConsultantId')?.valueChanges
    .pipe(
      takeUntil(this.destroyed)
    )
    .subscribe((val)=>{
      if (val){
        this.loadTimeslots(val);
      }
    });

  }

  loadDillerships(city: string): void{
    this.service.getDealerships(city, this.carId.id)
    .subscribe((res)=>{
      console.log(res)
      this.dealerships = res.result!.items;
    })
  }

  loadVisitReasons(): void{
    this.service.getVisitReasons()
    .subscribe((res)=>{
      this.visitReasons = res.result!.items;
    })
  }

  loadServiceConsultants(id: number): void{
    this.service.getServiceConsultants(id)
    .subscribe((res)=>{
      this.serviceConsultants = res.result!.items;
    })
  }

  loadTimeslots(id: number): void{
    this.service.getTimeSlots(id)
    .subscribe((res)=>{
      this.timeslots = res.result!.items;
    })
  }

  saveServiceRequest(): void{
    if (this.form.valid){
      let body: CreateServiceRequestDto = {
        carId: this.carId.id,
        ...this.form.value
      }

      this.service.createServiceRequest(body)
      .pipe(
        finalize(()=> this.close(true))
      )
      .subscribe()
    }
  }

  getUserCity():void{
    this.service.getUserCity().subscribe((res)=>{
      this.form.get('city')?.patchValue(res.result!)
    }
    )
  }

  close(value: boolean): void{
    this.dialogRef.close(value);
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
