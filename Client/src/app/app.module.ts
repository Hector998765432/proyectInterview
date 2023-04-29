import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { IconsProviderModule } from './icons-provider.module';

import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UsersModule } from './pages/users/users.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { appReducer } from './shared/store/app.reducer';

import { AppComponent } from './app.component';
const routes = [
  {
    path: 'users',
    component: UserListComponent
  },
  {path: 'create-user', component: CreateUserComponent},
  {path: '**', redirectTo: 'users'}
];

registerLocaleData(en);

const routerConfig: ExtraOptions = {
	scrollPositionRestoration: 'enabled',
	useHash: true,
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    RouterModule.forRoot(routes, routerConfig),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    StoreModule.forRoot({ appState: appReducer }),
    EffectsModule.forRoot([])
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
