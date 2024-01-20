import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
    return inject(AuthService).isAdmin
}



