import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShopCardShopsComponent } from "../../components/shop-card-shops/shop-card-shops.component";
import { Router, RouterOutlet } from '@angular/router';
import { ShopCardComponent } from './shop-card/shop-card.component';

@Component({
  selector: 'app-shops',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgClass, NgIf, ShopCardComponent, ShopCardShopsComponent],
  templateUrl: './shops.component.html',
  styleUrl: './shops.component.scss'
})
export class ShopsComponent {

}
