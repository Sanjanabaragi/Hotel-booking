import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from 'express';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const role = localStorage.getItem('role');

  if (role === 'Admin') {
    return true;
  }

  router.navigate(['/']);
  return false;
};
