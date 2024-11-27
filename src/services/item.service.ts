// src/app/services/item.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: any[] = []; // This will store the form data

  constructor() {}

  // Method to add an item
  addItem(item: any): void {
    this.items.push(item);
  }

  // Method to retrieve all items
  getItems(): any[] {
    return this.items;
  }
}
