import { GuestCountPipe }
from './guest-count-pipe';

describe('GuestCountPipe', () => {

  const pipe =
    new GuestCountPipe();

  it('should show guest count', () => {

    expect(
      pipe.transform(2)
    ).toBe('2 Guests');

  });

});