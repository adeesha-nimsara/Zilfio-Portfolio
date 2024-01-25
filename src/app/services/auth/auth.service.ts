import { Injectable } from '@angular/core';
import { Auth, authState, signInAnonymously, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: Auth,
    private router: Router,
  ) { 
    authState(this.auth).subscribe((response) => {
      console.log(response?.email)
      if (response?.email === 'adeeshabigunnimsara@gmail.com'){
        this.isAdmin = true
        this.router.navigate(['/admin'])
      }else{
        this.isAdmin = false
        this.router.navigate(['/login'])
      }
    })
  }

  googleProvider = new GoogleAuthProvider()
  isAdmin = false
  userData = Observable

  isAuthenticated() {
    return this.isAdmin
  }

  guestLoginService() {
    signInAnonymously(this.auth)
  }

  googleLoginService() {
    signInWithPopup(this.auth, this.googleProvider)
  }

  logOut(){
    this.auth.signOut()
  }
}
