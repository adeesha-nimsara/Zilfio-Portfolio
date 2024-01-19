import { Injectable } from '@angular/core';
import { Auth, signInAnonymously, signInWithRedirect, GoogleAuthProvider } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }
  googleProvider = new GoogleAuthProvider()

  getUser() {
    return this.auth.currentUser?.email
  }

  guestLoginService() {
    signInAnonymously(this.auth)
    console.log('guest')
  }

  googleLoginService() {
    signInWithRedirect(this.auth, this.googleProvider)
  }
}
