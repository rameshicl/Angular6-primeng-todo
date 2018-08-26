import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewtodoComponent } from './viewtodo/viewtodo.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { EdittodoComponent }  from './edittodo/edittodo.component';
const routes: Routes = [
  { path: 'all-todo', component: ViewtodoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'edit/:id', component: EdittodoComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
