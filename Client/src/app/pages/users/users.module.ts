import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserEffects } from '../../store/user.effects'
import { UserService } from '../../service/user.service'
import { userReducer } from '../../store/user.reducers';
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
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffects]),
    NzTableModule
  ],
  providers: [UserService]
})
export class UsersModule { }
