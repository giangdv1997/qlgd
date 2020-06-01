import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {loginReducers} from './login.reducer';
import {loginEffect} from './login.effect';
import {LoginRoutingModule} from './login-routing.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    StoreModule.forFeature('login', loginReducers),
    EffectsModule.forFeature(loginEffect),
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
