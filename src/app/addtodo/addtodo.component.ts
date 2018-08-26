import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
        {label: 'List View', icon: 'fa fa-fw fa-bar-chart',routerLink:'/dashboard'},
        {label: 'Update Entries', icon: 'fa fa-fw fa-calendar',routerLink:'/all-todo'}
    ];
}

}
