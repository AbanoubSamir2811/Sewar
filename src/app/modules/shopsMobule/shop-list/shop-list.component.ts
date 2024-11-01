import { Component } from '@angular/core';
import { ShopCardShopsComponent } from "../../../components/shop-card-shops/shop-card-shops.component";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { ShopCardComponent } from '../shop-card/shop-card.component';

@Component({
  selector: 'app-shop-list',
  standalone: true,
  imports: [FormsModule, NgClass, NgIf, ShopCardComponent, ShopCardShopsComponent],
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.scss'
})
export class ShopListComponent {
  isChecked = false;

  onToggle(): void {
    this.isChecked = !this.isChecked;
  }
  constructor(private router: Router) {}

  goToShopDetail() {
    this.router.navigate(['/shops', 'shop-detail']);
  }
}
