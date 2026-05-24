export const environment = {
  production: false,
  apiUrl: 'https://localhost:7001/api',
  apiBaseUrl: 'https://localhost:7001',
  auth: {
    loginUrl: '/auth/login',
    registerUrl: '/auth/register',
    forgotPasswordUrl: '/auth/forgot-password'
  },
  resources: {
    hotels: '/hotels',
    rooms: '/rooms',
    bookings: '/bookings',
    payments: '/payments',
    users: '/users',
    amenities: '/amenities',
    roomTypes: '/room-types',
    reports: '/reports'
  }
};
