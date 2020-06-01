import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {LoginState} from '../../login.reducer';
import {login} from '../../store/login-child.action';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private store: Store<LoginState>, private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onLogin() {
    const {valid, value} = this.form;
    if (!valid) {

    }
    this.store.dispatch(login({user: {username: 'giangdv3', password: 'abc'}}));
  }
}
