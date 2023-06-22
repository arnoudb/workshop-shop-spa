import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductActions } from 'src/app/product-store/product.actions';
import { ProductsService } from "src/app/core/services/products.service";
import { concatMap } from "rxjs";

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private readonly productsService: ProductsService) {
  }

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      concatMap(() => this.productsService.getProducts()),
      map(products => ProductActions.loadProductsSuccess({products: products.data})),
      //catchError(error => of(ProductActions.loadProductsFailure({error}))));
    );
  });
}
