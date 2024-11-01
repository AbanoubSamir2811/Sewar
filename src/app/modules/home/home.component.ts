import { Component } from '@angular/core';
import { ShopComponent } from '../../components/shop/shop.component';
import { GeneralStatisticsComponent } from './general-statistics/general-statistics.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GeneralStatisticsComponent, ShopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
