import { Component, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, getRedirectResult, signInAnonymously, signInWithRedirect } from '@angular/fire/auth'
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  constructor(
    private auth: Auth,
    private authService: AuthService,
    private router: Router
  ) { }

  googleProvider = new GoogleAuthProvider()

  ngOnInit() {
    getRedirectResult(this.auth).then((result) => {
      if (!result) return;
      if (result.user.email === 'adeeshabigunnimsara@gmail.com') {
        console.log('admin')
        this.router.navigate(['/admin'])
      } else {
        console.log('Not a Admin')
      } 
    })
  }

  guestLogin() {
    this.authService.guestLoginService()
  }

  googleLogin() {
    this.authService.googleLoginService()
  }


}
