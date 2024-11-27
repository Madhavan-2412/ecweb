import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../../../services/item.service';

@Component({
  selector: 'app-home-create',
  templateUrl: './home-create.component.html',
  styleUrl: './home-create.component.scss'
})
export class HomeCreateComponent implements OnInit {
  createItemForm: FormGroup;
  loading: boolean = false; 

  constructor(private fb: FormBuilder, private router: Router, private itemService: ItemService) {
    this.createItemForm = this.fb.group({
      itemName: ['', [Validators.required, Validators.pattern('^[A-Za-z\\s]+$')]],
      itemNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  ngOnInit(): void {}

  restrictToAlphabets(event: KeyboardEvent): void {
    const charCode = event.which || event.keyCode;
    const char = String.fromCharCode(charCode);
    if (!/[a-zA-Z]/.test(char)) {
      event.preventDefault();  // Prevent any non-alphabetic character
      alert('Only alphabets are allowed in Item Name!');
    }
  }

  // Block alphabets for "Item Number"
  restrictToNumbers(event: KeyboardEvent): void {
    const charCode = event.which || event.keyCode;
    const char = String.fromCharCode(charCode);
    if (!/[0-9]/.test(char)) {
      event.preventDefault();  // Prevent any non-numeric character
      alert('Only numbers are allowed in Item Number!');
    }
  }

  onSubmit(formData: any): void {
    if (this.createItemForm.valid) {
      this.loading = true; 
      console.log('Form Submitted', formData);

      const newItem = {
        itemName: formData.itemName,
        itemNumber: formData.itemNumber
      };
      
      console.log("New Item....",newItem);
      this.itemService.addItem(newItem);
      
      setTimeout(() => {
        this.loading = false; // Hide the loader
        alert('Item created successfully!');
        this.router.navigate(['home']); // Navigate to the home page
      }, 2000); // Simulate 2-second delay
    }
  }

  onCancel() {
    this.loading = true; // Show the loader
    // Simulate a delay before navigating
    setTimeout(() => {
      this.loading = false; // Hide the loader
      this.router.navigate(['home']); // Navigate to the home page
    }, 2000); // Simulate 2-second delay
  }

  resetForm(): void {
    this.createItemForm.reset();
  }
}