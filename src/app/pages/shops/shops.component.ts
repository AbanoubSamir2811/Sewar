import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShopCardComponent } from "../../components/shop-card/shop-card.component";
import { ShopCardShopsComponent } from "../../components/shop-card-shops/shop-card-shops.component";

@Component({
  selector: 'app-shops',
  standalone: true,
  imports: [FormsModule, NgClass, NgIf, ShopCardComponent, ShopCardShopsComponent],
  templateUrl: './shops.component.html',
  styleUrl: './shops.component.scss'
})
export class ShopsComponent {
  isChecked = false;

  onToggle(): void {
    this.isChecked = !this.isChecked;
  }
}
