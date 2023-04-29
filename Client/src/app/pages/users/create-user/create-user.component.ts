import { Component, OnInit } from '@angular/core';
import { Appstate } from 'src/app/shared/store/appstate';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { selectAppState } from 'src/app/shared/store/selector';
import { Usuario } from '../../../models/user.model';
import { invokeNewUserAPI } from '../store/user.action';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  constructor(
    private store: Store,
    private appStore: Store<Appstate>,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      sexo: ['', Validators.required],
      telefono: ['', Validators.required],
      status: [0],
      nacimiento: ['', Validators.required],
    });
  }

  save() {
    this.store.dispatch(invokeNewUserAPI({ user: this.userForm.value }));
    let apiStatus$ = this.appStore.pipe(select(selectAppState));
    apiStatus$.subscribe((apState) => {
      if (apState.apiStatus == 'success') {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        this.router.navigate(['/']);
      }
    });
  }
}
