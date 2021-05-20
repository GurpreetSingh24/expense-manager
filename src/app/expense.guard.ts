import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class ExpenseGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }

  checkLogin(url: string): true | UrlTree {
    console.log('Url: ' + url);
    let val: string = JSON.parse(localStorage.getItem('isUserLoggedIn')!);

    if (val != null && val == 'true' && url == '/login') {
      this.router.parseUrl('/expenses');
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
