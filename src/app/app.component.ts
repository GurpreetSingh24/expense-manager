import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Expense Manager';
  isUserLoggedIn = false;

  constructor(
    private authService: AuthService,
    private activatedRoute:ActivatedRoute,
    private router:Router) {}

  ngOnInit() {
    let storeData = localStorage.getItem('isUserLoggedIn');
    console.log('StoreData: ' + storeData);

    if (storeData != null && storeData == 'true') this.isUserLoggedIn = true;
    else this.isUserLoggedIn = false;

    this.authService.getUser().subscribe((hasUser: boolean) => {
      this.isUserLoggedIn = hasUser;
    });
  }
  public onLogout(): void {
    this.authService.setUser(false);
    this.router.navigate(['/login'])  }
}
