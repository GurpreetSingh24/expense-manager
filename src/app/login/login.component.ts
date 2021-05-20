import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName!: string;
  password!: string;
  formData!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formData = new FormGroup({
      userName: new FormControl('admin'),
      password: new FormControl('admin'),
    });
  }

  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;

    console.log('Login Page: ' + this.userName);
    console.log('Login page: ' + this.password);

    this.authService.login(this.userName, this.password).subscribe((data) => {
      console.log('Is Login Success: ' + data);
      if (data) this.router.navigate(['/expenses']);
    });
  }
}