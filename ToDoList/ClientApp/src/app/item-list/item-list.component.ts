import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Item } from '../model/item';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() Items: Item[];
  
  // Setup some events
  @Output() onRemoveItem: EventEmitter<Item> = new EventEmitter();
  @Output() onSaveItem: EventEmitter<Item> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public saveItem(item: Item): void {
    this.onSaveItem.emit(item);
  }

  public removeItem(item: Item): void {
    this.onRemoveItem.emit(item);
  }

}
