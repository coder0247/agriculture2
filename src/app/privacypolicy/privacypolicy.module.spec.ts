import { PrivacypolicyModule } from './privacypolicy.module';

describe('PrivacypolicyModule', () => {
  let privacypolicyModule: PrivacypolicyModule;

  beforeEach(() => {
    privacypolicyModule = new PrivacypolicyModule();
  });

  it('should create an instance', () => {
    expect(privacypolicyModule).toBeTruthy();
  });
});
