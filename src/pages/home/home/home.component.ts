import { Component } from '@angular/core';
import { HeroComponent } from '../../../components/reusable/hero/hero.component';
import { BestSellersComponent } from '../../../components/bestSellers/best-sellers/best-sellers.component';
import { CategoriesComponent } from '../../../components/categories/categories/categories.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, BestSellersComponent, CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  homeText = 'Stay Coffienated';
  homeSubText = 'Awaken your senses and power through every moment.';
}
