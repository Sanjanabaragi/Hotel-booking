import { environment } from '../../../environments/environment';

export const API_CONSTANTS = {
  BASE_URL: environment.apiUrl,

  AUTH: {
    LOGIN: environment.auth.loginUrl,
    REGISTER: environment.auth.registerUrl,
    FORGOT_PASSWORD: environment.auth.forgotPasswordUrl
  },

  ROOMS: environment.resources.rooms,
  HOTELS: environment.resources.hotels,
  BOOKINGS: environment.resources.bookings,
  PAYMENTS: environment.resources.payments,
  USERS: environment.resources.users,
  AMENITIES: environment.resources.amenities,
  ROOM_TYPES: environment.resources.roomTypes,
  REPORTS: environment.resources.reports
};