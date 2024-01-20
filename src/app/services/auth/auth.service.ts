import { Injectable } from '@angular/core';
import { Auth, signInAnonymously, signInWithRedirect, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private router: Router) { }
  googleProvider = new GoogleAuthProvider()
  isAdmin = false

  isAuthenticated() {
    return this.isAdmin
  }

  guestLoginService() {
    signInAnonymously(this.auth)
    console.log('guest')
  }

  googleLoginService() {
    signInWithPopup(this.auth, this.googleProvider).then((result) => {
      this.isAdmin = true
      const cred = GoogleAuthProvider.credentialFromResult(result)
      console.log('google' + this.isAdmin)
      this.router.navigate(['/admin'])
    })
  }
}
