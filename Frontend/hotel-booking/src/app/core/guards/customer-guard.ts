import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const customerGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const role = localStorage.getItem('role');

  if (role === 'Customer') {
    return true;
  }

  router.navigate(['/']);
  return false;
};
