import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProductEffects } from 'src/app/product-store/product.effects';

describe('ProductEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ProductEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
