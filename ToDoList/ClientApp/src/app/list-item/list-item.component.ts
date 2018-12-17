import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Item } from '../model/item';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item: Item;

  // Are we in edit mode?
  private _inEditMode: boolean = false;

  // Setup some events
  @Output() onRemoveItem: EventEmitter<Item> = new EventEmitter();
  @Output() onSaveItem: EventEmitter<Item> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // Methods
  removeItem(): void {
    this.onRemoveItem.emit(this.item);
  }

  setEditMode(edit: boolean): void {
    this._inEditMode = edit;
  }

  saveItem(): void {
    this.setEditMode(false);
    this.onSaveItem.emit(this.item);
  }
}
