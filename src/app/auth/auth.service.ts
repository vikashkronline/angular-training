import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly router: Router) {}

  private loggedIn = false;

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  login(): Observable<boolean> {
    this.loggedIn = true;
    return of(this.loggedIn);
  }

  loOut(): void {
    this.loggedIn = false;
    this.router.navigate(['login']);
  }
}
