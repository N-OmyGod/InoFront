import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dealerships } from 'src/app/common/constants/dealerships';
import { ApiDealershipModel } from 'src/app/common/interfaces/models/api-dealership.model';
import { DealershipModel } from 'src/app/common/interfaces/models/api-models/dealership.model';

@Component({
  selector: 'app-view-dealership-dialog',
  templateUrl: './view-dealership-dialog.component.html',
  styleUrls: ['./view-dealership-dialog.component.scss']
})
export class ViewDealershipDialogComponent implements OnInit {
  dealership: ApiDealershipModel | null = null;
  constructor(
    public dialogRef: MatDialogRef<ViewDealershipDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ApiDealershipModel,
  ) { }

  ngOnInit(): void {
   // const founded = Dealerships.find(x => x.id == this.data);
//this.dealership = founded != undefined ? founded : null;
this.dealership=this.data;
  }
 
  close(): void {
    this.dialogRef.close();
  }

}
