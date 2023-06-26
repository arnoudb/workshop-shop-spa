import { createFeature, createReducer, on } from '@ngrx/store';
import { ProductActions } from 'src/app/product-store/product.actions';
import { ProductState } from "src/app/product-store/product.state";

export const productInitialState: ProductState = {
  products: [],
  productsPending: false,
  productsError: null,
};

export const productFeature = createFeature({
  name: 'Product',
  reducer: createReducer(
    productInitialState,
    on(ProductActions.loadProducts, (state) => ({
      ...state,
      productsPending: true,
    })),
    on(ProductActions.loadProductsSuccess, (state, { products }) => ({
      ...state,
      products,
      productsPending: false,
    })),
    on(ProductActions.loadProductsFailure, (state, productsError) => ({
      ...state,
      productsPending: false,
      productsError,
    }))
  ),
});

export const {
  name,
  reducer,
  selectProductState,
  selectProducts,
  selectProductsPending,
  selectProductsError,
} = productFeature;

