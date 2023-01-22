import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../login/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUserStatus: boolean = false;
  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(user: User) {
    if (user.email === 'a' && user.password === 'a') {
      this.authUserStatus = true;
      this.showMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.authUserStatus = false;
      this.showMenuEmitter.emit(false);
    }
  }

  AuthUser(){
    return this.authUserStatus;
  }
}
