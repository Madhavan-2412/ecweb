import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isCrudMenuVisible = false; // Initially hide the CRUD submenu

  // Toggle the visibility of the CRUD submenu
  toggleCrudMenu() {
    this.isCrudMenuVisible = !this.isCrudMenuVisible;
  }
  successMessage: string | null = null;
  pageTitle: string = 'Center Content';
  pageContent: string = 'This is where your main page content will go.';
  dropdownVisible: boolean = false;
  username: string = '';

  constructor(private userService: UserService, private router: Router) {}

  toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }

  ngOnInit(): void {
    // Retrieve username from service
    this.username = this.userService.getUsername();
    const navigation = this.router.getCurrentNavigation();
    this.successMessage = navigation?.extras.state?.['message'] || null;
  }

  onCreate() {
    this.pageTitle = 'Create a New Item';
    this.pageContent = `
      <h3>Fill in the form to create a new item:</h3>
      <form (submit)="onSubmitCreateItem($event)">
        <label for="itemName">Item Name:</label>
        <input type="text" id="itemName" placeholder="Enter item name" [(ngModel)]="itemName" name="itemName" required>
        <button type="submit">Create</button>
      </form>
    `;
  }

  itemName: string = ''; // Variable to bind with input field
  onSubmitCreateItem(event: Event) {
    event.preventDefault(); // Prevent page reload on form submission
    console.log('Item Created:', this.itemName); // Log the created item (you can replace this with actual logic to save the item)
    // Reset form
    this.itemName = ''; // Clear input field after submission
  }

  logout(): void {
    // Handle logout logic here (e.g., clear tokens, session, etc.)
    this.router.navigate(['login']); // Navigate to the login page
  }
}
