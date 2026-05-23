import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const customerGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const role = typeof localStorage === 'undefined' ? null : localStorage.getItem('role');

  if (role === 'Customer') {
    return true;
  }

  router.navigate(['/']);
  return false;
};
