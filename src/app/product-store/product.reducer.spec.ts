import { reducer, productInitialState } from 'src/app/product-store/product.reducer';

describe('Product Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(productInitialState, action);
      expect(result).toBe(productInitialState);
    });
  });
});
