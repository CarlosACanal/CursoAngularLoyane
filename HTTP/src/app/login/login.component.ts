import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  userLogin() {
    this.authService.fazerLogin(this.user);
  }
}
