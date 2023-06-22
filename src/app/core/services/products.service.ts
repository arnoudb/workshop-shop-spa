import { Injectable } from '@angular/core';
import { Product } from "src/app/core/models/Product";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  getProducts(): Observable<{ data: Product[] }> {
    return this.httpClient.get<{ data: Product[] }>('assets/products.json');
  }
}
