import { BookingStatusPipe }
from './booking-status-pipe';

describe('BookingStatusPipe', () => {

  const pipe =
    new BookingStatusPipe();

  it('should transform confirmed status', () => {

    expect(
      pipe.transform('CONFIRMED')
    ).toBe('✅ Confirmed');

  });

});