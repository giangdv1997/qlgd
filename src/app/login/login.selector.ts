import {createFeatureSelector} from '@ngrx/store';
import {LoginState} from './login.reducer';

export const getLoginSelector = createFeatureSelector<LoginState>('login');
