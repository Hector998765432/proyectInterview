import { Component, OnInit } from '@angular/core';
import { Appstate } from 'src/app/shared/store/appstate';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { selectAppState } from 'src/app/shared/store/selector';
import { invokeNewUserAPI } from '../store/user.action';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

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
    private formBuilder: FormBuilder,
    private modal: NzModalService,
    private notification: NzNotificationService
  ) {}

  userForm!: FormGroup;
  confirmModal?: NzModalRef;

  ngOnInit(): void {
    let reg = /^\d+$/;
    this.userForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      sexo: [Validators.required],
      telefono: [
        null,
        [
          Validators.required,
          Validators.pattern(reg),
          Validators.min(999999999),
          Validators.max(9999999999),
        ],
      ],
      status: [0],
      nacimiento: ['', Validators.required],
    });

    this.userForm.get('sexo')?.valueChanges.subscribe((value) => {
      if (value && this.userForm.value.status != 0) {
        this.userForm.get('status')?.setValue(0);
      }
    });
  }

  save() {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Los datos son correctos?',
      nzContent: 'Al aceptar se redigirá al listado de Usuarios',
      nzOnOk: () => {
        this.store.dispatch(invokeNewUserAPI({ user: this.userForm.value }));
        let apiStatus$ = this.appStore.pipe(select(selectAppState));
        apiStatus$.subscribe((apState) => {
          const { apiStatus, apiResponseMessage } = apState;

          if (apiStatus == 'success') {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: '' },
              })
            );
            this.router.navigate(['/users']);
          } else if (apiStatus == 'error') {
            this.createNotification('error', apiResponseMessage);
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: '' },
              })
            );
          }
        });
      },
      nzOnCancel: () => this.confirmModal?.close(),
    });
  }

  newUserNavigation() {
    this.router.navigate(['/users']);
  }

  createNotification(type: string, message: string): void {
    this.notification.create(type, '', `${message}`);
  }
}
