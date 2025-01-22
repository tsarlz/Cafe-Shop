import { bestseller } from './../../../core/constant/data';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-best-sellers',
  imports: [NgFor],
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.css',
})
export class BestSellersComponent {
  bestsellerData = bestseller;
}
