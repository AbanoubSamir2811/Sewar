import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Category {
  name: string;
  subcategories?: Category[];
}

@Component({
  selector: 'app-category',
  standalone: true,
  imports:[NgIf, NgFor],
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  @Input() category!: Category;
}
