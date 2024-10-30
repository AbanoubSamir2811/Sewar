// local-storage.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { setNumber, loadNumber } from './local-storage.actions';

export interface LocalStorageState {
  number: number;
}

export const initialState: LocalStorageState = {
  number: Number(localStorage.getItem('number')) || 0, // Load from local storage on initialization
};

export const localStorageReducer = createReducer(
  initialState,
  on(setNumber, (state, { number }) => {
    localStorage.setItem('number', number.toString()); // Update local storage
    return { ...state, number }; // Update state
  }),
  on(loadNumber, (state) => {
    const number = Number(localStorage.getItem('number')) || 0; // Load from local storage
    return { ...state, number }; // Return new state with loaded number
  })
);
