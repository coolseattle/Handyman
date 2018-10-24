import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import {AuthenticationService, ILoginState} from '../Services/authentication/index';
import {Observable} from 'rxjs'; 

import { Router } from '@angular/router'

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px; }
  `]
})
export class LoginComponent {
  username
  password
  mouseoverLogin
  constructor(private authService:AuthenticationService, private router: Router) {
  }

  login(formValues) { 
    this.authService.login(formValues.userName, formValues.password);
    this.authService.authChange$.subscribe( loginstate => 
       { 
         if (loginstate.Loggedin){
            console.warn('successully logged in');
            const redirecturl = this.authService.redirecturl ? this.authService.redirecturl : 'events';
            // Redirect the user
            this.router.navigate([redirecturl]);
          }
        }
    );
    this.router.navigate['handyman/list'];
}
  cancel() {
    this.router.navigate(['events'])
  }
}