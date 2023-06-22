import { Product } from "src/app/core/models/Product";

export interface ProductState {
  products: Product[];
  productsPending: boolean;
}
