import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth-guard';
import { adminGuard } from './core/guards/admin-guard';
import { customerGuard } from './core/guards/customer-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Auth Routes (public)
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
  },

  // Home Routes (public)
  {
    path: 'home',
    loadComponent: () => import('./features/home/home-page/home-page').then(m => m.HomePageComponent)
  },
  {
    path: 'landing',
    loadComponent: () => import('./features/home/landing-page/landing-page').then(m => m.LandingPageComponent)
  },

  // Hotel Routes (public)
  {
    path: 'hotels',
    loadComponent: () => import('./features/hotels/hotel-list/hotel-list').then(m => m.HotelListComponent)
  },
  {
    path: 'hotels/search',
    loadComponent: () => import('./features/hotels/hotel-search/hotel-search').then(m => m.HotelSearchComponent)
  },
  {
    path: 'hotels/:id',
    loadComponent: () => import('./features/hotels/hotel-details/hotel-details').then(m => m.HotelDetailsComponent)
  },

  // Room Routes (public)
  {
    path: 'rooms',
    loadComponent: () => import('./features/rooms/room-list/room-list').then(m => m.RoomListComponent)
  },
  {
    path: 'rooms/:id',
    loadComponent: () => import('./features/rooms/room-details/room-details').then(m => m.RoomDetailsComponent)
  },
  {
    path: 'rooms/availability',
    loadComponent: () => import('./features/rooms/room-availability/room-availability').then(m => m.RoomAvailabilityComponent)
  },
  {
    path: 'room-booking/:id',
    loadComponent: () => import('./features/rooms/room-booking/room-booking').then(m => m.RoomBookingComponent),
    canActivate: [authGuard]
  },

  // Booking Routes (protected)
  {
    path: 'bookings',
    loadComponent: () => import('./features/bookings/booking-list/booking-list').then(m => m.BookingListComponent),
    canActivate: [authGuard]
  },
  {
    path: 'bookings/:id',
    loadComponent: () => import('./features/bookings/booking-details/booking-details').then(m => m.BookingDetailsComponent),
    canActivate: [authGuard]
  },
  {
    path: 'bookings/confirmation/:id',
    loadComponent: () => import('./features/bookings/booking-confirmation/booking-confirmation').then(m => m.BookingConfirmationComponent),
    canActivate: [authGuard]
  },
  {
    path: 'bookings/cancel/:id',
    loadComponent: () => import('./features/bookings/cancel-booking/cancel-booking').then(m => m.CancelBookingComponent),
    canActivate: [authGuard]
  },
  {
    path: 'booking-history',
    loadComponent: () => import('./features/customer/booking-history/booking-history').then(m => m.BookingHistoryComponent),
    canActivate: [authGuard]
  },

  // Payment Routes (protected)
  {
    path: 'payment',
    loadComponent: () => import('./features/payments/payment-page/payment-page').then(m => m.PaymentPageComponent),
    canActivate: [authGuard]
  },
  {
    path: 'payment-success',
    loadComponent: () => import('./features/payments/payment-success/payment-success').then(m => m.PaymentSuccessComponent)
  },
  {
    path: 'payment-failure',
    loadComponent: () => import('./features/payments/payment-failure/payment-failure').then(m => m.PaymentFailureComponent)
  },

  // Customer Routes (protected)
  {
    path: 'customer',
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/customer/dashboard/dashboard').then(m => m.CustomerDashboardComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/customer/profile/profile').then(m => m.CustomerProfileComponent)
      },
      {
        path: 'notifications',
        loadComponent: () => import('./features/customer/notifications/notifications').then(m => m.CustomerNotificationsComponent)
      }
    ]
  },

  // Admin Routes (protected with admin guard)
  {
    path: 'admin',
    canActivate: [authGuard, adminGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/admin/dashboard/dashboard').then(m => m.AdminDashboardComponent)
      },
      {
        path: 'hotels',
        loadComponent: () => import('./features/admin/manage-hotels/manage-hotels').then(m => m.ManageHotelsComponent)
      },
      {
        path: 'rooms',
        loadComponent: () => import('./features/admin/manage-rooms/manage-rooms').then(m => m.ManageRoomsComponent)
      },
      {
        path: 'room-types',
        loadComponent: () => import('./features/admin/manage-room-types/manage-room-types').then(m => m.ManageRoomTypesComponent)
      },
      {
        path: 'amenities',
        loadComponent: () => import('./features/admin/manage-amenities/manage-amenities').then(m => m.ManageAmenitiesComponent)
      },
      {
        path: 'bookings',
        loadComponent: () => import('./features/admin/manage-bookings/manage-bookings').then(m => m.ManageBookingsComponent)
      },
      {
        path: 'payments',
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

  { path: '**', redirectTo: 'home' }

// import { HomePage } from './features/home/home-page/home-page';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout';

import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home'
    },

    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },

    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./features/admin/dashboard/dashboard')
                        .then(m => m.AdminDashboardComponent)
            }

        ]
    },

    {
        path: 'customer',
        component: CustomerLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./features/customer/dashboard/dashboard')
                        .then(m => m.CustomerDashboardComponent)
            }

        ]
    },

    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'login',
                loadComponent: () =>
                    import('./features/auth/login/login').
                        then(m => m.LoginComponent)
            },

            {
                path: 'register',
                loadComponent: () =>
                    import('./features/auth/register/register')
                        .then(m => m.RegisterComponent)

            }

        ]
    }

>>>>>>> 462dd22762710153fd34e103e7d67f66a91e32c2
];
