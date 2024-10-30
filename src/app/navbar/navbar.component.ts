import { NgIf } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectNumber } from '../storage.selectors';
import { loadNumber, setNumber } from '../local-storage.actions';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
   number$: Observable<number>;
  currentNum: number;
  constructor(private store: Store) {
    this.number$ = this.store.select(selectNumber); // Select the number from the store
    this.currentNum = Number(this.number$)
  }

  ngOnInit(): void {
    this.store.dispatch(loadNumber()); // Load number from local storage on initialization
  }

  updateNumber(): void {
    this.store.dispatch(setNumber({ number: Number(localStorage.getItem('number')) })); // Increment and set the number
  }

  titles=["الصفحة الرئيسية", "المتاجر", "الإستفسارات", "المساعدة والإقتراحات", "الإشعارات", "الإحصائيات والتقارير", "المستخدمين", "المشرفين", "الإعدادات"]


}
