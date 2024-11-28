import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item.service';

@Component({
  selector: 'app-home-read',
  templateUrl: './home-read.component.html',
  styleUrl: './home-read.component.scss'
})
export class HomeReadComponent implements OnInit {
  @Input() items: any[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {}
}
