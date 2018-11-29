import { ProductListModule } from './productlist.module';

describe('prodModule', () => {
  let prodModule: ProductListModule;

  beforeEach(() => {
    prodModule = new ProductListModule();
  });

  it('should create an instance', () => {
    expect(prodModule).toBeTruthy();
  });
});
