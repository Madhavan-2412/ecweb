import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username: string = '';

  constructor() {}

  // Set the username (after login)
  setUsername(username: string): void {
    this.username = username;
    localStorage.setItem('username', username); // Optionally use local storage
  }

  getUsername(): string {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('username') || '';
    }
    return ''; // Or return a fallback value if needed
  }
}