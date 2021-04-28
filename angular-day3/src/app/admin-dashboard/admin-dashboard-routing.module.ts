import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../admin-dash-board/list/list.component';
import { LoginComponent } from '../admin-dash-board/login/login.component';


const routes: Routes = [
  {
    path:"login",component:LoginComponent
  },
  {
    path:"list",component:ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
