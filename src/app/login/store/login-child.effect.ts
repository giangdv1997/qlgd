import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as loginActions from './login-child.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {LoginService} from '../services/login.service';
import {of} from 'rxjs';
import {Inject, Injectable} from '@angular/core';

@Injectable()
export class LoginChildEffect {
  constructor(private actions$: Actions, private loginService: LoginService) {
  }

  onLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActions.login),
      mergeMap((action) => {
        return this.loginService.onLogin(action.user).pipe(
          map(response => {
            if (response.responseCode === '200') {
              console.log(response);
              return loginActions.loginSuccess({response});
            } else {
              return loginActions.loginFailure({errors: response});
            }
          }),
          catchError(errors => of(loginActions.loginFailure({errors})))
        );
      })
    )
  );
}
