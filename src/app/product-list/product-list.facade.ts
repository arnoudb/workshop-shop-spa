import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from "src/app/core/models/Product";
import { ProductActions } from "src/app/product-store/product.actions";
import { selectProducts, selectProductsPending, selectProductsError } from "src/app/product-store/product.reducer";

@Injectable({
  providedIn: 'root'
})
export class ProductListFacade {
  products$: Observable<Product[]> = this.store.select(selectProducts);
  productsPending$: Observable<boolean> = this.store.select(selectProductsPending);
  productsError$: Observable<Error | null> = this.store.select(selectProductsError);

  constructor(private readonly store: Store) {
    this.getProducts();
  }

  getProducts(): void {
    this.store.dispatch(ProductActions.loadProducts());
  }
}
