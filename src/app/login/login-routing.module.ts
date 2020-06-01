import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './containers/login/login.component';
import {NgModule} from '@angular/core';

const ROUTERS: Routes = [
  {
    path: '', component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTERS)],
  exports: [RouterModule],
})
export class LoginRoutingModule { }
