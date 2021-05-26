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
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): true | UrlTree {
    console.log('Url: ' + url);
    let val: boolean = JSON.parse(localStorage.getItem('isUserLoggedIn')!);
    console.log('Val', val);
    
    if (val != null && val) {
      if (url == '/login') return this.router.parseUrl('/expenses');
      else return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
