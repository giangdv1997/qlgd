import {Action, createReducer, on} from '@ngrx/store';
import * as loginAction from './login-child.action';

export interface LoginChildState {
  user: any | {};
  isLoading: boolean;
  errors: any;
}

export const initialState: LoginChildState = {
  user: {},
  isLoading: false,
  errors: null,
};

export const reducer = createReducer(
  initialState,

  on(loginAction.login, (state, {user}) => ({
    ...state,
    isLoading: true
  })),
  on(loginAction.loginSuccess, (state, {response}) => ({
    ...state,
    user: response,
    isLoading: false
  })),
  on(loginAction.loginFailure, (state, {errors}) => ({
    ...state,
    isLoading: false,
    errors
  })),
);

export function loginReducer(state: LoginChildState | undefined, action: Action) {
  return reducer(state, action);
}

