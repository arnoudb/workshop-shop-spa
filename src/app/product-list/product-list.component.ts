import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListFacade } from "src/app/product-list/product-list.facade";

@Component({
  selector: 'wss-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  constructor(readonly productListFacade : ProductListFacade) {
  }
}
