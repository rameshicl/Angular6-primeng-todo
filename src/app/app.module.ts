import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import {PrimeModule} from './prime/prime.module';
import { ViewtodoComponent } from './viewtodo/viewtodo.component';
import { EdittodoComponent } from './edittodo/edittodo.component';
import { TodomessagesComponent } from './todomessages/todomessages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TodoSearchComponent } from './todo-search/todo-search.component';
import { InMemoryDataService }  from './in-memory-data.service';
@NgModule({
  declarations: [
    AppComponent,
    AddtodoComponent,
    ViewtodoComponent,
    EdittodoComponent,
    TodomessagesComponent,
    DashboardComponent,
    TodoSearchComponent
  ],
  imports: [
    BrowserModule,PrimeModule,FormsModule, AppRoutingModule,HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
