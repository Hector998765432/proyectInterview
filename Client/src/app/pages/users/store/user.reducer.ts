import { createReducer, on } from '@ngrx/store';
import { Usuario } from '../../../models/user.model';
import { usersGetSuccess } from './user.action';

export const initialState: ReadonlyArray<Usuario> = [];

export const userReducer = createReducer(
  initialState,
  on(usersGetSuccess, (state, { users }) => {
    return users;
  })
);
