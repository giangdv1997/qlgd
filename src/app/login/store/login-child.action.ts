import {createAction, props} from '@ngrx/store';

export const login = createAction(
  '[Login Page] on login',
  props<{ user: any }>()
);

export const loginSuccess = createAction(
  '[Login Page] on login success',
  props<{ response: any }>()
);

export const loginFailure = createAction(
  '[Login Page] on login failure',
  props<{ errors: any }>()
);
