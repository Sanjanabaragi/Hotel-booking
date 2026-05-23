import { HighlightDirective }
from './highlight';

describe('HighlightDirective', () => {

  it('should create directive', () => {

    const directive =
      new HighlightDirective(
        {} as any
      );

    expect(directive)
      .toBeTruthy();

  });

});