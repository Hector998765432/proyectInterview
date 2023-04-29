import { GeneralUsuario, Usuario } from '../models/user.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface UserState extends EntityState<any> {
  usersLoaded: boolean;
}

export const adapter: EntityAdapter<Usuario> = createEntityAdapter<Usuario>();

export const initialState: UserState = adapter.getInitialState({
  usersLoaded: false,
});

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users }) => {
    return adapter.setAll(users, { ...state, usersLoaded: true });
  }),
  on(UserActions.createUser, (state, { user }) => {
    return adapter.addOne(user, state);
  })
);