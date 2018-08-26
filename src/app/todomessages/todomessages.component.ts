import { Component, OnInit } from '@angular/core';
import {MsgserviceService} from '../msgservice.service';
@Component({
  selector: 'app-todomessages',
  templateUrl: './todomessages.component.html',
  styleUrls: ['./todomessages.component.scss']
})
export class TodomessagesComponent implements OnInit {

  constructor(public alertres:MsgserviceService) { }

  ngOnInit() {
  }

}
