import { Routes } from '@angular/router';
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

];
