import { areUsersLoaded } from '../../store/user.selectors';
import { loadUsers, loadUsersSuccess } from '../../store/user.actions';
import { AppState } from '../../store/reducers/index';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter, finalize, first, tap} from 'rxjs/operators';

@Injectable()
export class UsersResolver{

  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
    .pipe(
        select(areUsersLoaded),
        tap((loadUsersSuccess) => {
          if (!loadUsersSuccess) {
            this.store.dispatch(loadUsers());
          }

        }),
        filter(loadUsersSuccess => loadUsersSuccess),
        first()
    );
  }
}