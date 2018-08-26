import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TabMenuModule,
    TableModule,
    MenubarModule,
    CalendarModule
  ],
  exports:[
    InputTextModule,
    MenubarModule,
    CalendarModule,
    CardModule,
    ButtonModule,
    TableModule,
    TabMenuModule
  ],
  declarations: []
})
export class PrimeModule { }
