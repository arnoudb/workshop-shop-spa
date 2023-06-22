import { createFeature, createReducer, on } from '@ngrx/store';
import { ProductActions } from 'src/app/product-store/product.actions';
import { ProductState } from "src/app/product-store/product.state";

export const productInitialState: ProductState = {
  products: [],
  productsPending: false,
};

export const productFeature = createFeature({
  name: 'Product',
  reducer: createReducer(
    productInitialState,
    on(ProductActions.loadProducts, (state) => ({
      ...state,
      itemsPending: true,
    })),
    on(ProductActions.loadProductsSuccess, (state, { products }) => ({
      ...state,
      products,
      itemsPending: false,
    }))
  ),
});

export const {
  name,
  reducer,
  selectProductState,
  selectProducts,
  selectProductsPending,
} = productFeature;

