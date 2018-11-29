import { TermsofuseModule } from './termsofuse.module';

describe('TermsofuseModule', () => {
  let termsofuseModule: TermsofuseModule;

  beforeEach(() => {
    termsofuseModule = new TermsofuseModule();
  });

  it('should create an instance', () => {
    expect(termsofuseModule).toBeTruthy();
  });
});
