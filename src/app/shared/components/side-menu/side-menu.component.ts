import { Component, OnInit } from '@angular/core';

export interface SideMenuItem{
  id: number,
  path: string,
  title: string
}
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  items: SideMenuItem[] = [
    {
      id: 0,
      path: 'profile',
      title: 'Профиль'
    },
    {
      id: 1,
      path: 'garage',
      title: 'Гараж'
    },
    {
      id: 2,
      path: 'dillerships',
      title: 'Диллерские центры'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
