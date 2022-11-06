import { Component, OnInit } from '@angular/core';
import { ApiDealershipModel } from 'src/app/common/interfaces/models/api-dealership.model';
import { DealershipService } from 'src/app/common/services/dealership/dealership.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  dealerships: ApiDealershipModel[] = [
    // {
    //   id: 1,
    //   brand: 'BMW',
    //   address: 'Taganrog streeet Frounze 23 house 234',
    //   openingTime: new Date(),
    //   closingTime: new Date(),
    //   name: 'BMW Dealership',
    //   operatorNum: 'XZ'
    // }
  ];
  displayedColumns = ['brand', 'name', 'address', 'operatorNum', 'openingTime', 'closingTime'];

  constructor(private service: DealershipService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.service.getAll()
    .subscribe((res) => {
      this.dealerships = res.items;
    });
  }

}
