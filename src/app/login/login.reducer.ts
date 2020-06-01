import {LoginChildState, loginReducer} from './store/login-child.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface LoginState {
  loginchild: LoginChildState;
}

export const loginReducers: ActionReducerMap<LoginState> = {
  loginchild: loginReducer
};
