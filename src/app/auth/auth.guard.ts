import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';



export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
    //used auth service data to return true
    if (inject(AuthService).isAdmin === true){
      return true
    }else{
      inject(Router).navigate(['/login'])
      return false
    }
}



