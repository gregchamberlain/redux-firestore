import StarterPackage from '../src/index';

describe('StarterPackage', () => {
  it('Passes a test', () => {
    expect(StarterPackage).toBeDefined();
  });
  it('Fails a test', () => {
    expect(StarterPackage).toBeUndefined();
  });
});
