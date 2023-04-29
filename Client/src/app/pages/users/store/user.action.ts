import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../../models/user.model'

export const invokeUsersAPI =  createAction(
    '[USER API] Invoke Users From API'
)

export const usersGetSuccess = createAction(
    '[USER API] Get API Success',
    props<{ users: Usuario[] }>()
)