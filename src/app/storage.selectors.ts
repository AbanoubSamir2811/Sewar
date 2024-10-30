// local-storage.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LocalStorageState } from './local-storage.reducer';

export const selectLocalStorageState = createFeatureSelector<LocalStorageState>('localStorage');

export const selectNumber = createSelector(
  selectLocalStorageState,
  (state) => state.number
);
