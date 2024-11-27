import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecweb';

  isLoggedIn = false;

  // Method to handle login, you can replace this with actual authentication logic
  login(username: string, password: string) {
    // Basic login logic for demonstration, replace with actual auth check
    if (username === 'jeeva' && password === 'password') {
      this.isLoggedIn = true;
    }
  }
}
