import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'pok-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login(form: any): void {
    if (form.email && form.password) {
      this.authService.setAuth();
      this.router.navigate(['/home']);
    }
  }
}
