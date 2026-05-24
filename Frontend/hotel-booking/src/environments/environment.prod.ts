export const environment = {
  production: true,
  apiUrl: 'https://api.yourdomain.com/api',
  apiBaseUrl: 'https://api.yourdomain.com',
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
