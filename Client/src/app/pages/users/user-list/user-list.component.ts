import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { userActionTypes } from  '../../../store/user.actions'
import { selectUserState } from '../../../store/user.selectors'
import { AppState } from 'src/app/store/reducers';
import { UserService } from '../../../service/user.service';


import { GeneralUsuario, Usuario } from 'src/app/models/user.model';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users$!: any

  constructor(private UserService: UserService, private store: Store<AppState>){}

  ngOnInit() {
    this.users$ = this.store.select(selectUserState)
    
    console.log(this.users$)
    console.log("Hola")
  }

}
