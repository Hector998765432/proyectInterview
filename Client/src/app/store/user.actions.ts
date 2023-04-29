import { GeneralUsuario, Usuario } from '../models/user.model';
import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction('[User/API] Load Users');

export const loadUsersSuccess = createAction(
  '[User/API] Load Users Success',
  props<{ users: Usuario[] }>()
);

export const loadUsersFailure = createAction(
  '[User/API] Load Users Failure',
  props<{ error: string }>()
);

export const createUser = createAction(
  '[User] Create User',
  props<{ user: Usuario }>()
);

export const userActionTypes = {
  loadUsers,
  createUser,
  loadUsersSuccess
};
