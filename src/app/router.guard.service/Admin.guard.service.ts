import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthenticationService} from './../Services/authentication/authentication.service';
import {Observable, observable, of} from 'rxjs';
import {map, take} from 'rxjs/operators';
import { LoginRole } from '../Services';

@Injectable()
export class AdminGuardService implements CanActivate {
  constructor(
    private authService: AuthenticationService, 
    private router: Router) {}

  canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let loggedin  = false;
    let url: string = state.url;

    return this.authService.authChange$.pipe(
        map( user => {
            if (user && user.Loggedin && user.role as LoginRole === LoginRole.Admin as LoginRole){
                loggedin = true;
                return true;
            }
            else{
                this.authService.redirecturl = url;
                this.router.navigate(['/user/login']);
                console.warn('guard returning false at the end :' + loggedin);
                return false;
            }
      })
    );
  }
}

@Injectable()
export class LogoutGuardService implements CanActivate {  
  constructor(private authService: AuthenticationService, 
    private router: Router) {}

  canActivate():boolean {
    this.authService.logout();
    this.router.navigate(['']);
    return true;
  }
}