import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../../models/user.model'

export const invokeUsersAPI =  createAction(
    '[USER API] Invoke Users From API'
)

export const usersGetSuccess = createAction(
    '[USER API] Get API Success',
    props<{ users: Usuario[] }>()
)

export const invokeNewUserAPI = createAction(
    '[Users API] Invoke save new user api',
    props<{ user: Usuario }>()
  );
   
  export const saveNewUserAPISuccess = createAction(
    '[Users API] save new user api success',
    props<{ user: Usuario }>()
  );