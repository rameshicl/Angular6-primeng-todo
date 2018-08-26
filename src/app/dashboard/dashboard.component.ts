import { Component, OnInit } from '@angular/core';
import {Worklist} from '../worklist';
import {TodoserviceService} from '../todoservice.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  allActivity:Worklist[] = [];
  constructor(private todoservice:TodoserviceService) { }

  ngOnInit() {
    this.getAlllist();
  }
  getAlllist(): void {
    this.todoservice.getAllList()
    .subscribe(res => this.allActivity = res);
  }
}
