import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const role = typeof localStorage === 'undefined' ? null : localStorage.getItem('role');

  if (role === 'Admin') {
    return true;
  }

  router.navigate(['/']);
  return false;
};
