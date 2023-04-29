import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {userReducer} from './store/user.reducer'
import {UserEffect} from './store/user.effect'

import { UserService } from '../../service/user.service'
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component'

import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [
    CreateUserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    StoreModule.forFeature('myusers', userReducer),
    EffectsModule.forFeature([UserEffect])
  ],
  providers: [UserService]
})
export class UsersModule { }
