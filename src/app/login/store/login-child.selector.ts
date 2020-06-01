import {createSelector} from '@ngrx/store';
import {getLoginSelector} from '../login.selector';
import {LoginState} from '../login.reducer';

export const getLoginState = createSelector(
  getLoginSelector,
  (loginState: LoginState) => loginState.loginchild
);

export const selectUser = createSelector(
  getLoginState,
  state => state.user
);

export const selectIsLoading = createSelector(
  getLoginState,
  state => state.isLoading
);

export const selectErrors = createSelector(
  getLoginState,
  state => state.errors
);
