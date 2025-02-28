import { bestseller } from './../../../core/constant/data';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-best-sellers',
  imports: [NgFor, RouterLink],
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.css',
})
export class BestSellersComponent {
  bestsellerData = bestseller;
}
