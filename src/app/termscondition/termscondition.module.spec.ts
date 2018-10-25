import { TermsconditionModule } from './termscondition.module';

describe('TermsconditionModule', () => {
  let termsconditionModule: TermsconditionModule;

  beforeEach(() => {
    termsconditionModule = new TermsconditionModule();
  });

  it('should create an instance', () => {
    expect(termsconditionModule).toBeTruthy();
  });
});
