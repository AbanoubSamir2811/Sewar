import { Component } from '@angular/core';
import { GeneralStatisticsComponent } from './general-statistics/general-statistics.component';
import { ShopComponent } from './shop/shop.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GeneralStatisticsComponent, ShopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
