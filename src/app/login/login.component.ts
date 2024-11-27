import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UserService) {}

  onSubmit(){
    if (!this.username && !this.password) {
      alert('Please fill in both username and password');
      return;
  }

  if (!this.username) {
      alert('Please type the username');
      return;
  }

  if (!this.password) {
      alert('Please type the password');
      return;
  }
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    
    if (this.username === 'Madhavan' && this.password === 'qwerty') {
      this.userService.setUsername(this.username);
      // Navigate to the main page after successful login
      this.router.navigate(['home']); // Without the leading slash
    } else {
      // Optionally, show an error if login fails
      alert('Invalid username or password');
    }

  }
}
