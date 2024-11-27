import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item.service';

@Component({
  selector: 'app-home-read',
  templateUrl: './home-read.component.html',
  styleUrl: './home-read.component.scss'
})
export class HomeReadComponent implements OnInit {
  items: any[] = []; // To hold the data to display

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    // Retrieve the items from the service when the component is initialized
    this.items = this.itemService.getItems();
  }
}
