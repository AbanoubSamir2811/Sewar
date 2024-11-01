import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shop-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shop-details.component.html',
  styleUrl: './shop-details.component.scss'
})
export class ShopDetailsComponent {
  title: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Access the route data
    this.title = this.route.snapshot.data['title'];
  }
  isChecked = false;

  toggle() {
    this.isChecked = !this.isChecked;
  }
}
