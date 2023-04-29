import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';

import { UserService } from '../../../service/user.service'
import { invokeUsersAPI, usersGetSuccess } from './user.action'
import { selectUsers } from './user.selector'

@Injectable()
export class UserEffect {
    constructor(
        private actions$: Actions,
        private userService: UserService,
        private store: Store
      ) {}

      loadAllUsers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(invokeUsersAPI),
        withLatestFrom(this.store.pipe(select(selectUsers))),
        mergeMap(([, userFormStore]) => {
          if (userFormStore.length > 0) {
            return EMPTY;
          }
          return this.userService
            .getAll()
            .pipe(map((data) => usersGetSuccess({ users: data })));
        })
      )
    );
}