import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TodoserviceService }  from '../todoservice.service';
import { Worklist } from '../worklist';
@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.scss']
})
export class EdittodoComponent implements OnInit {
  @Input() worklist: Worklist;
  //worklist: Worklist;
  constructor(private route: ActivatedRoute,
    private todoSer: TodoserviceService,
    private location: Location) { }

  ngOnInit() {
    this.getActivityPerId();
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.todoSer.updateTodo(this.worklist)
      .subscribe(() => this.goBack());
  }
  getActivityPerId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoSer.getListPerId(id)
      .subscribe(res => this.worklist = res);
  }
}
