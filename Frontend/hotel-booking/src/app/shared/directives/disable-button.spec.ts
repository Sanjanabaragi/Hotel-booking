import { DisableButtonDirective }
from './disable-button';

describe('DisableButtonDirective', () => {

  it('should create directive', () => {

    const directive =
      new DisableButtonDirective(
        {} as any
      );

    expect(directive)
      .toBeTruthy();

  });

});