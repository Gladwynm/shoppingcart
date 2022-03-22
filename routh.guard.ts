import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class RouthGuard implements CanActivate {
  constructor(public userSer: UserService, public myRouter: Router) { }
  canActivate(): boolean {
    if (!this.userSer.isLoggedIn()) {
      localStorage.clear();
      this.myRouter.navigateByUrl("/login")
    }
    return this.userSer.isLoggedIn();
  }

}
