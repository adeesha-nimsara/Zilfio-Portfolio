import { Component, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, getRedirectResult, signInAnonymously, signInWithRedirect } from '@angular/fire/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  constructor(
    private auth: Auth
  ) { }

  googleProvider = new GoogleAuthProvider()

  ngOnInit() {
    getRedirectResult(this.auth).then((result) => {
      if (!result) return;
      if (result.user.email === 'adeeshabigunnimsara@gmail.com') {
        console.log('admin')
      } else {
        console.log('Not a Admin')
      }
    })
  }

  guestLogin() {
    signInAnonymously(this.auth)
  }

  googleLogin() {
    signInWithRedirect(this.auth, this.googleProvider)
  }
}
