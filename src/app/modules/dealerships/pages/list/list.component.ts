import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewDealershipDialogComponent } from '@modules/dealerships/dialogs/view-dealership-dialog/view-dealership-dialog.component';
import { Dealerships } from 'src/app/common/constants/dealerships';
import { ApiDealershipModel } from 'src/app/common/interfaces/models/api-dealership.model';
import { DealershipService } from 'src/app/common/services/dealership/dealership.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  dealerships = Dealerships;
  displayedColumns = ['brand', 'name', 'address', 'operatorNum', 'openingTime', 'closingTime'];

  constructor(private service: DealershipService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.service.getAll()
    .subscribe((res) => {
      this.dealerships = res.items;
    });
  }

  openViewDialog(model: ApiDealershipModel): void{
    this.dialog.open(ViewDealershipDialogComponent, {
      width: '620px',
      height: '210px',
      data: model
    })
  }

}
