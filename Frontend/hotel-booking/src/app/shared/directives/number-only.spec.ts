import { NumberOnlyDirective }
from './number-only';

describe('NumberOnlyDirective', () => {

  it('should create directive', () => {

    const directive =
      new NumberOnlyDirective();

    expect(directive)
      .toBeTruthy();

  });

});