import { createFeatureSelector } from '@ngrx/store';
import { Usuario } from '../../../models/user.model'

export const selectUsers = createFeatureSelector<Usuario[]>('myusers');