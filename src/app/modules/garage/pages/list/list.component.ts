import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ViewCarDialogComponent } from '@modules/garage/dialogs/view-car-dialog/view-car-dialog.component';
import { config, finalize, map } from 'rxjs';
import { ApiCarModel } from 'src/app/common/interfaces/models/api-car.model';
import { GarageService } from 'src/app/common/services/garage/garage.service';
import { SpinnerService } from 'src/app/common/services/spinner.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit , AfterViewInit {
  carSelected: boolean = false;

  selectedcarIdx: ApiCarModel | null  = null;

  cars: ApiCarModel[] = [
    {
      id: 0,
      stateNumber : 'А000ХО 179',
      model: '154',
      mark: 'Alfa Romeo',
      active: false
    },
    {
      id: 1,
      stateNumber : 'А000ХО 179',
      model: '145',
      mark: 'Austin',
      active: false
    },
  ];

  dataSource = new MatTableDataSource<ApiCarModel>(this.cars);
  displayedColumns: string[] = ['id', 'mark', 'model', 'stateNumber'];



  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private matDialog: MatDialog, 
    private spinner: SpinnerService,
    private carService: GarageService) {
   }

  ngOnInit(): void {
    this.load();
  }

  load(): void{
    this.spinner.show();
    this.carService.cars()
    .pipe(
      finalize(() => {
        this.spinner.hide();
      }),
    ).subscribe((res)=>{
      this.cars = res.Items;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  clickOnRow(row: ApiCarModel): void{
    this.matDialog.open(ViewCarDialogComponent, {
      width: '750px',
      height: '500px',
      data: row.id,
    });
  }

}
