import { Routes } from '@angular/router';
// import { HomePage } from './features/home/home-page/home-page';


export const routes: Routes = [
  // 1. PUBLIC LANDING & PUBLIC HOTEL SEARCH CHANNELS
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home-page/home-page').then(m => m.HomePageComponent)
  },
  {
    path: 'hotels',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/hotels/hotel-list/hotel-list').then(m => m.HotelListComponent)
      },
      {
        path: 'search',
        loadComponent: () => import('./features/hotels/hotel-search/hotel-search').then(m => m.HotelSearchComponent)
      },
      {
        path: ':id',
        loadComponent: () => import('./features/hotels/hotel-details/hotel-details').then(m => m.HotelDetailsComponent)
      }
    ]
  },
  {
    path: 'rooms',
    children: [
      {
        path: ':id',
        loadComponent: () => import('./features/rooms/room-details/room-details').then(m => m.RoomDetailsComponent)
      }
    ]
  },

  // 2. IDENTITY AND ACCESS MANAGED PATHS
  {
    path: 'auth',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./features/auth/register/register').then(m => m.RegisterComponent)
      },
      {
        path: 'forgot-password',
        loadComponent: () => import('./features/auth/forgot-password/forgot-password').then(m => m.ForgotPasswordComponent)
      }
    ]
  },

  // 3. SECURED RETAIL TENANT FLOWS
  {
    path: 'customer',
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/customer/dashboard/dashboard').then(m => m.CustomerDashboardComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/customer/profile/profile').then(m => m.CustomerProfileComponent)
      },
      {
        path: 'bookings',
        loadComponent: () => import('./features/customer/booking-history/booking-history').then(m => m.BookingHistoryComponent)
      },
      {
        path: 'notifications',
        loadComponent: () => import('./features/customer/notifications/notifications').then(m => m.CustomerNotificationsComponent)
      }
    ]
  },

  // 4. TRANSACTION & CHECKOUT FUNNEL
  {
    path: 'checkout',
    children: [
      {
        path: 'booking/:roomId',
        loadComponent: () => import('./features/rooms/room-booking/room-booking').then(m => m.RoomBookingComponent)
      },
      {
        path: 'payment',
        loadComponent: () => import('./features/payments/payment-page/payment-page').then(m => m.PaymentPageComponent)
      },
      {
        path: 'success',
        loadComponent: () => import('./features/payments/payment-success/payment-success').then(m => m.PaymentSuccessComponent)
      },
      {
        path: 'failure',
        loadComponent: () => import('./features/payments/payment-failure/payment-failure').then(m => m.PaymentFailureComponent)
      }
    ]
  },

  // 5. ENTERPRISE OPERATIONS PANEL
  {
    path: 'admin',
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/admin/dashboard/dashboard').then(m => m.AdminDashboardComponent)
      },
      {
        path: 'manage-hotels',
        loadComponent: () => import('./features/admin/manage-hotels/manage-hotels').then(m => m.ManageHotelsComponent)
      },
      {
        path: 'manage-rooms',
        loadComponent: () => import('./features/admin/manage-rooms/manage-rooms').then(m => m.ManageRoomsComponent)
      },
      {
        path: 'manage-room-types',
        loadComponent: () => import('./features/admin/manage-room-types/manage-room-types').then(m => m.ManageRoomTypesComponent)
      },
      {
        path: 'manage-amenities',
        loadComponent: () => import('./features/admin/manage-amenities/manage-amenities').then(m => m.ManageAmenitiesComponent)
      },
      {
        path: 'manage-bookings',
        loadComponent: () => import('./features/admin/manage-bookings/manage-bookings').then(m => m.ManageBookingsComponent)
      },
      {
        path: 'manage-payments',
        loadComponent: () => import('./features/admin/manage-payments/manage-payments').then(m => m.ManagePaymentsComponent)
      },
      {
        path: 'cancellations',
        loadComponent: () => import('./features/admin/cancellations/cancellations').then(m => m.CancellationsComponent)
      },
      {
        path: 'reports',
        loadComponent: () => import('./features/admin/reports/reports').then(m => m.ReportsComponent)
      },
      {
        path: 'users',
        loadComponent: () => import('./features/admin/users/users').then(m => m.UsersComponent)
      }
    ]
  },

  // 6. WILDCARD FALLBACK
  {
    path: '**',
    redirectTo: 'home'
  }
];


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
 //   {path: 'home', loadComponent: () => import('./features/home/home-page/home-page').then(m => m.HomePage) },
    {path: '**', redirectTo: 'home' }
];
