import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {userReducer} from './store/user.reducer'
import {UserEffect} from './store/user.effect'

import { UserService } from '../../service/user.service'
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component'

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

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
    EffectsModule.forFeature([UserEffect]),
    NzIconModule,
    NzDividerModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzCardModule,
    NzInputModule,
    NzInputNumberModule,
    NzRadioModule,
    NzDatePickerModule,
    NzModalModule,
    NzNotificationModule
  ],
  providers: [UserService]
})
export class UsersModule { }
