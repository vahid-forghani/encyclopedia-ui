import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from './security/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  publicItems: MenuItem[] = [];
  authenticatedItems: MenuItem[] = [];

  constructor(private authService: AuthService) {
    this.publicItems = [
      {
        label: 'Articles',
        url: '/articles'
      },
      {
        label: 'Login',
        url: '/login'
      }
    ];
    this.authenticatedItems = [
      {
        label: 'Articles',
        url: '/articles'
      },
      {
        label: 'User Management',
        url: '/users'
      }
    ];
  }

  isLoggedIn(): boolean {
    return this.authService.isLogedIn();
  }

  logout(): void {
    this.authService.logout();
    location.reload();
  }
}
