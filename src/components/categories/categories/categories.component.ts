import { categories } from './../../../core/constant/data';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryButtonComponent } from '../../reusable/category-button/category-button.component';

@Component({
  selector: 'app-categories',
  imports: [NgFor, CategoryButtonComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  categoriesData = categories;
  customers = 'customers.webp';
}
