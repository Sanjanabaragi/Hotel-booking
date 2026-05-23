import { UppercaseDirective }
from './uppercase';

describe('UppercaseDirective', () => {

  it('should create directive', () => {

    const directive =
      new UppercaseDirective(
        {} as any
      );

    expect(directive)
      .toBeTruthy();

  });

});