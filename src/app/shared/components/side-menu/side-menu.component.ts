import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/common/services/profile/profile.service';
import { StorageService } from 'src/app/common/services/storage.service';

export interface SideMenuItem{
  id: number,
  path: string,
  title: string,
  active: boolean
}
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  activeItemId: number = 1;

  items: SideMenuItem[] = [
    {
      id: 0,
      path: 'profile',
      title: 'Профиль',
      active: false
    },
    {
      id: 1,
      path: 'cars',
      title: 'Гараж',
      active: false
    },
    {
      id: 2,
      path: 'dillerships',
      title: 'Диллерские центры',
      active: false
    }
  ];

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: ProfileService) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.url)

    //this.click(this.activeItemId);
  }

  click(id: number): void{
    let item = this.items.find((x)=> x.id === id)

    if (item){
      this.items[this.activeItemId].active = false;
      this.items[id].active = true;
      this.activeItemId = id;
      this.router.navigate(['', item.path])
    }

  }

  logout(): void{
    this.service.logout();
    this.router.navigate(['/', 'auth']);
  }

}
