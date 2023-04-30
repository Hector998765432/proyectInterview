import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import {
  EMPTY,
  map,
  mergeMap,
  switchMap,
  withLatestFrom,
  catchError,
  of,
} from 'rxjs';

import { UserService } from '../../../service/user.service';
import {
  invokeUsersAPI,
  usersGetSuccess,
  invokeNewUserAPI,
  saveNewUserAPISuccess,
  saveNewUserError,
} from './user.action';
import { selectUsers } from './user.selector';
import { Appstate } from 'src/app/shared/store/appstate';
import { setAPIStatus } from 'src/app/shared/store/app.action';

@Injectable()
export class UserEffect {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store,
    private appStore: Store<Appstate>
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

  saveNewUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeNewUserAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.userService.create(action.user).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return saveNewUserAPISuccess({ user: data });
          }),
          catchError((error) =>
            of(
              saveNewUserError({ error: error.error.message }),
              setAPIStatus({
                apiStatus: { apiResponseMessage: error.error.message, apiStatus: 'error' },
              })
            )
          )
        );
      })
    );
  });
}
