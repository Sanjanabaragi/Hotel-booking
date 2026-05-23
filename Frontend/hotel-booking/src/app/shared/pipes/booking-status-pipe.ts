import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'bookingStatus'
})
export class BookingStatusPipe
implements PipeTransform {

  transform(value: string): string {

    switch(value) {

      case 'CONFIRMED':
        return '✅ Confirmed';

      case 'PENDING':
        return '⏳ Pending';

      case 'CANCELLED':
        return '❌ Cancelled';

      default:
        return value;
    }
  }
}