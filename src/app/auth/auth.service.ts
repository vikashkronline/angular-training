import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly router: Router) {}

  private loggedIn = new BehaviorSubject(false);

  isAuthenticated(async = false): Observable<boolean> | boolean {
    if (!async) {
      return this.loggedIn.value;
    }
    return this.loggedIn.asObservable();
  }

  login(): Observable<boolean> {
    this.loggedIn.next(true);
    return this.loggedIn.asObservable();
  }

  logout(): void {
    this.loggedIn.next(false);
    this.router.navigate(['login']);
  }
}
