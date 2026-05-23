import { TruncatePipe }
from './truncate-pipe';

describe('TruncatePipe', () => {

  const pipe =
    new TruncatePipe();

  it('should truncate text', () => {

    expect(
      pipe.transform(
        'Angular Hotel Booking',
        10
      )
    ).toBe('Angular H...');

  });

});