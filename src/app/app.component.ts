import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ProductListComponent } from "src/app/product-list/product-list.component";

@Component({
  selector: 'wss-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenubarModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workshop-shop';
  items: MenuItem[] = [
    {
      label: 'Shop',
      icon: 'pi pi-home',
    },
    {
      label: 'Cart',
      icon: 'pi pi-shopping-cart',
    },
  ];
}
