import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 462dd22762710153fd34e103e7d67f66a91e32c2

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = typeof localStorage === 'undefined' ? null : localStorage.getItem('token');

  if (token) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
