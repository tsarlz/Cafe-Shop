import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatIconModule, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  logo = 'pnglogo.png';
  isNavbarVisible = true; // Controls the visibility of the navbar
  lastScrollTop = 0; // Stores the last scroll position

  // Listen to scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop) {
      // Scrolling down
      this.isNavbarVisible = false;
    } else {
      // Scrolling up
      this.isNavbarVisible = true;
    }

    // Update the last scroll position
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}
