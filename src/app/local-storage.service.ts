// local-storage.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storageKey = 'number'; // Change this to your localStorage key
  private itemSubject = new BehaviorSubject<number>(this.getNumberFromStorage());
  item$ = this.itemSubject.asObservable();

  constructor() {
    // Optional: Initialize the BehaviorSubject with the current value from localStorage
    this.itemSubject.next(this.getNumberFromStorage());
  }

  setNumber(value: number): void {
    localStorage.setItem(this.storageKey, value.toString());
    this.itemSubject.next(value); // Notify subscribers
  }

  getNumberFromStorage(): number {
    return Number(localStorage.getItem(this.storageKey))-1 || 0; // Default to 0 if not set
  }
}
