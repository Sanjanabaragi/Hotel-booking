export interface Booking {
  bookingId: number;
  userId: number;
  roomId: number;
  checkInDate: Date;
  checkOutDate: Date;
  totalAmount: number;
  bookingStatus: string;
}