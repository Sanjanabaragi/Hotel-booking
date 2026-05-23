export interface Room {
  roomId: number;
  roomNumber: string;
  roomType: string;
  pricePerNight: number;
  capacity: number;
  isAvailable: boolean;
}