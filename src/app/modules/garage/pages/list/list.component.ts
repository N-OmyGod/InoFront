import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteCarDialogComponent } from '@modules/garage/dialogs/delete-car-dialog/delete-car-dialog.component';
import { ViewCarDialogComponent } from '@modules/garage/dialogs/view-car-dialog/view-car-dialog.component';
import { config, finalize, map, Subject, takeUntil } from 'rxjs';
import { EditOrViewDialog } from 'src/app/common/interfaces/dialog-interfaces/dialog.interface';
import { ApiCarModel } from 'src/app/common/interfaces/models/api-car.model';
import { GarageService } from 'src/app/common/services/garage/garage.service';
import { SpinnerService } from 'src/app/common/services/spinner.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit , AfterViewInit , OnDestroy{
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

  // dataSource = new MatTableDataSource<ApiCarModel>(this.cars);
  dataSource:ApiCarModel[] = [];
  displayedColumns: string[] = ['id', 'mark', 'model', 'stateNumber'];

  destroyed: Subject<void> = new Subject<void>()


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
      takeUntil(this.destroyed),
      finalize(() => {
        this.spinner.hide();
      }),
    ).subscribe((res)=>{
      this.cars = res.items;
      this.dataSource=res.items;
      console.log(res);
    });
  }

  openDeleteDialog(): void{
    this.matDialog.open(DeleteCarDialogComponent,{
      width: '550px',
      height: '200px'
    }).afterClosed()
    .pipe(
      takeUntil(this.destroyed),
    )
    .subscribe((result) => {
      if (result){
        this.load();
      }
    })
  }

  openEditDialog(): void{
    let data: EditOrViewDialog = {
      id: 1,
      edit: true
    }
    this.matDialog.open(ViewCarDialogComponent, {
      width: '750px',
      height: '500px',
      data
    });
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  clickOnRow(row: ApiCarModel): void{
    let data: EditOrViewDialog = {
      id: row.id,
      edit: false
    }
    this.matDialog.open(ViewCarDialogComponent, {
      width: '750px',
      height: '500px',
      data
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

}
