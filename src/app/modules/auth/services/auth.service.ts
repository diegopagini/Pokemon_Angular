import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuth: boolean = false;

  get isAuthenticated(): boolean {
    return this.isAuth;
  }

  setAuth(): void {
    this.isAuth = true;
  }
}
