import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-button',
  imports: [],
  templateUrl: './category-button.component.html',
  styleUrl: './category-button.component.css',
})
export class CategoryButtonComponent {
  @Input() borderColor: string = '';
}
