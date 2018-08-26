import { Component, OnInit } from '@angular/core';
import {Worklist} from '../worklist';
import {TodoserviceService} from '../todoservice.service';
@Component({
  selector: 'app-viewtodo',
  templateUrl: './viewtodo.component.html',
  styleUrls: ['./viewtodo.component.scss']
})
export class ViewtodoComponent implements OnInit {
  allActivity:Worklist[];
  constructor(private todoservice:TodoserviceService) { }

  ngOnInit() {
    this.getAlllist();
  }
  getAlllist(): void {
    this.todoservice.getAllList()
    .subscribe(res => this.allActivity = res);
  }
  add(activity: string): void {
    activity = activity.trim();
    if (!activity) { return; }
    this.todoservice.addTodo({ activity } as Worklist)
      .subscribe(todo => {
        this.allActivity.push(todo);
      });
  }
 
  delete(worklist: Worklist): void {
    this.allActivity = this.allActivity.filter(h => h !== worklist);
    this.todoservice.deleteTodo(worklist).subscribe();
  }
}
