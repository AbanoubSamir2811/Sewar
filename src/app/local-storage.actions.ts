// local-storage.actions.ts
import { createAction, props } from '@ngrx/store';

export const setNumber = createAction(
  '[Local Storage] Set Number',
  props<{ number: number }>()
);

export const loadNumber = createAction('[Local Storage] Load Number');
