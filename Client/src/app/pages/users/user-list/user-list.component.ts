import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { invokeUsersAPI } from '../store/user.action'
import {selectUsers} from '../store/user.selector'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {

  constructor(private store: Store, private router: Router) {}
  users$ = this.store.pipe(select(selectUsers));

  ngOnInit() {
    this.store.dispatch(invokeUsersAPI())
  }

  newUserNavigation(){
    this.router.navigate(['/create-user'])
  }
}
