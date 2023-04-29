import { adapter, UserState } from './user.reducers';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(
  selectUserState,
  adapter.getSelectors().selectAll
);

export const areUsersLoaded = createSelector(
  selectUserState,
  (state) => state.usersLoaded
);