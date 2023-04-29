import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';


import { EntityState } from '@ngrx/entity';
import { Usuario } from 'src/app/models/user.model';

export interface AppState extends EntityState<Usuario> {
  usersLoaded: boolean;
}

export const reducers: any = {
};


export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
