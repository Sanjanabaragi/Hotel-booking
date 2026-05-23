import { PriceFormatPipe }
from './price-format-pipe';

describe('PriceFormatPipe', () => {

  const pipe =
    new PriceFormatPipe();

  it('should format price', () => {

    expect(
      pipe.transform(1500)
    ).toBe('₹ 1500.00');

  });

});