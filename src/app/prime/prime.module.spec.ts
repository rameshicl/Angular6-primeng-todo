import { PrimeModule } from './prime.module';

describe('PrimeModule', () => {
  let primeModule: PrimeModule;

  beforeEach(() => {
    primeModule = new PrimeModule();
  });

  it('should create an instance', () => {
    expect(primeModule).toBeTruthy();
  });
});
