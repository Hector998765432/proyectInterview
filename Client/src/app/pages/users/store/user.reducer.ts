import { createReducer, on } from '@ngrx/store';
import { Usuario } from '../../../models/user.model';
import { usersGetSuccess, saveNewUserAPISuccess } from './user.action';

export const initialState: ReadonlyArray<Usuario> = [];

export const userReducer = createReducer(
  initialState,
  on(usersGetSuccess, (state, { users }) => {
    return users;
  }),
  on(saveNewUserAPISuccess, (state, { user }) => {
    let newState = [...state];
    newState.unshift(user);
    return newState;
  })
);
