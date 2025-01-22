import { categories } from './../../../core/constant/data';
import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../../../components/reusable/hero/hero.component';
import { MatIconModule } from '@angular/material/icon';
import { menuList } from '../../../core/constant/data';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  imports: [HeroComponent, MatIconModule, NgFor, NgIf, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  menuText = 'Bring On The Bliss';
  menuSubText = 'Savor every sip and bite, where comfort meets delight.';
  imgPath = 'coffe.png';
  imgFoodPath = 'silog.png';

  allDrinks: any[] = [];
  allFoods: any[] = [];
  filteredItems: any[] = [];
  variety: string = '';
  category: string = '';

  searchInput = '';

  onSearch() {
    this.searchInput = this.searchInput.toLocaleLowerCase().trim();
    if (!this.searchInput) {
      this.filteredItems = this.initializeMenu();
    } else {
      this.filteredItems = this.filteredItems.filter(
        (item) =>
          item.name.toLocaleLowerCase().trim().includes(this.searchInput) ||
          item.variety.toLocaleLowerCase().trim().includes(this.searchInput)
      );
    }
  }

  ngOnInit(): void {
    this.initializeMenu();
  }

  scrollToview() {
    const element = document.getElementById('searchMenu');
    if (element) {
      const remToPixels =
        parseFloat(getComputedStyle(document.documentElement).fontSize) * 14; // Convert 6rem to pixels
      const position = element.offsetTop - remToPixels; // Calculate position with offset
      window.scrollTo({ top: position, behavior: 'smooth' }); // Scroll to the adjusted position
    }
  }

  initializeMenu() {
    //Display All Menu Function
    const drinks = menuList.find((item) => item.name === 'Drinks');
    const foods = menuList.find((item) => item.name === 'Foods');

    this.allDrinks = drinks?.categories.flatMap((item) => item.types) || [];
    this.allFoods = foods?.categories.flatMap((item) => item.types) || [];

    return (this.filteredItems = [...this.allDrinks, ...this.allFoods]);
    this.variety = '';
  }

  filterMenu(category: string) {
    //Display Selected Category
    const drinks = menuList.find((item) => item.name === 'Drinks');
    const foods = menuList.find((item) => item.name === 'Foods');

    this.allDrinks =
      drinks?.categories
        .filter((item) => item.variety === category)
        .flatMap((item) => item.types) || [];

    this.allFoods =
      foods?.categories
        .filter((item) => item.variety === category)
        .flatMap((item) => item.types) || [];

    this.filteredItems = [...this.allDrinks, ...this.allFoods];
    this.variety = this.filteredItems[0].variety;

    this.scrollToview(); //Envoke Scroll-To-View Method
  }
}
