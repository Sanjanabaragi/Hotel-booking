import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'guestCount'
})
export class GuestCountPipe
implements PipeTransform {

  transform(value: number): string {

    return value === 1
      ? '1 Guest'
      : `${value} Guests`;

  }
}