import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExtraOptions, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UsersModule } from './pages/users/users.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

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
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
