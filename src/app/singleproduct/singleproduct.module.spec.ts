import { SingleproductModule } from './singleproduct.module';

describe('SingleproductModule', () => {
  let singleproductModule: SingleproductModule;

  beforeEach(() => {
    singleproductModule = new SingleproductModule();
  });

  it('should create an instance', () => {
    expect(singleproductModule).toBeTruthy();
  });
});
