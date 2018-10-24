import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ILoginState, LoginRole } from './Login.state.model';

@Injectable()
export class AuthenticationService {
  private authmanager$: BehaviorSubject<ILoginState> = new BehaviorSubject(null);

  private authState: ILoginState;
  public authChange$: Observable<ILoginState>;
  public redirecturl: string;
  
  constructor() {
    this.authChange$ = this.authmanager$.asObservable();
  }
  
  login(username: string, password: string): void {
    this.setAuthState(loginState[0]);
  }

  logout(): void {
    this.setAuthState(null);
  }

  emitAuthState(): void {
    this.authmanager$.next(this.authState);
  }

  private setAuthState(newAuthState: ILoginState): void {
    this.authState = newAuthState;
    this.emitAuthState();
  }
}

const loginState: ILoginState[] = [
    {  
      Loggedin : true,
      role : LoginRole.Admin,
      user: {
          id:1,
          fname: 'nanda',
          lname: 'Lastname',
          phone: '15037992700',
          lastlogindate: new Date('9/26/2018'),
          PhotoImageUrl: '/assets/images/software-architect.jpeg'
      }
    },
    {  
      Loggedin : true,
      role : LoginRole.Handymen,
      user: {
          id: 3,
          fname: 'Macim Gorkee',
          lname: 'Plumber',
          phone: '+919486903444',
          lastlogindate: new Date('9/26/2017'),
          PhotoImageUrl: '/assets/images/software-architect.jpeg'
      }
    },
    {  
        Loggedin : false
    }
]