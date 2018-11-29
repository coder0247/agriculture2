import { ResetpasswordModule } from './resetpassword.module';

describe('AboutModule', () => {
  let aboutModule: ResetpasswordModule;

  beforeEach(() => {
    aboutModule = new ResetpasswordModule();
  });

  it('should create an instance', () => {
    expect(aboutModule).toBeTruthy();
  });
});
