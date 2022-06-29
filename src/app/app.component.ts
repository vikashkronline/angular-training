import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  loggedIn: Observable<boolean>;

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.loggedIn = this.authService.isAuthenticated(
      true
    ) as Observable<boolean>;
  }

  logout(): void {
    this.authService.logout();
  }
}
