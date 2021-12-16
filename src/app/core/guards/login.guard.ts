import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanDeactivate<unknown> {
  constructor(private authService: AuthService) {}

  canDeactivate(): Observable<boolean> {
    if (this.authService.isAuthenticated) {
      return of(true);
    } else {
      return of(false);
    }
  }
}
