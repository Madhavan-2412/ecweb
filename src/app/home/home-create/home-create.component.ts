import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../../../services/item.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-create',
  templateUrl: './home-create.component.html',
  styleUrl: './home-create.component.scss'
})
export class HomeCreateComponent implements OnInit {
  items: any[] = [];
  createItemForm: FormGroup;
  loading: boolean = false; 
  restrictionNotes: string = '';
  showItems: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private itemService: ItemService,  private toasterService: ToastrService) {
    this.createItemForm = this.fb.group({
      itemName: ['', [Validators.required, Validators.pattern('^[A-Za-z\\s]+$')]],
      itemNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  restrictToAlphabets(event: KeyboardEvent): void {
    const charCode = event.which || event.keyCode;
    const char = String.fromCharCode(charCode);
    if (!/[a-zA-Z]/.test(char)) {
      event.preventDefault();  // Prevent any non-alphabetic character
      this.restrictionNotes = 'Note: Only alphabets are allowed';
    }
  }

  // Block alphabets for "Item Number"
  restrictToNumbers(event: KeyboardEvent): void {
    const charCode = event.which || event.keyCode;
    const char = String.fromCharCode(charCode);
    if (!/[0-9]/.test(char)) {
      event.preventDefault();  // Prevent any non-numeric character
      this.restrictionNotes = 'Note: Only numbers are allowed';
    }
  }

  onSubmit(formData: any): void {
    if (this.createItemForm.valid) {
      this.loading = true; 
      this.restrictionNotes = '';
      console.log('Form Submitted', formData);

      const newItem = {
        itemName: formData.itemName,
        itemNumber: formData.itemNumber
      };
      
      const existingItem = this.items.find(item => item.itemName === newItem.itemName && item.itemNumber === newItem.itemNumber);
      if (existingItem) {
        this.loading = false;
        this.restrictionNotes = 'Duplicate Error: Item name and numbers cannot be duplicated';
        return;
      }

      console.log("New Item....",newItem);
      this.itemService.addItem(newItem);
      
      setTimeout(() => {
        this.loading = false; // Hide the loader
        this.items = this.itemService.getItems(); // Refresh the items
        this.showItems = true; // Set flag to true to display items
        alert('Item created successfully!');
      }, 1000); // Simulate 2-second delay
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