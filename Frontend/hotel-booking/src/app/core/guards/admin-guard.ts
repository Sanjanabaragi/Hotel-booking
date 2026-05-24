import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 462dd22762710153fd34e103e7d67f66a91e32c2

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const role = typeof localStorage === 'undefined' ? null : localStorage.getItem('role');

  if (role === 'Admin') {
    return true;
  }

  router.navigate(['/']);
  return false;
};
