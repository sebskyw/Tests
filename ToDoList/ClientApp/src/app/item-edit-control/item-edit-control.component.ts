import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Item } from '../model/item';

@Component({
  selector: 'item-edit-control',
  templateUrl: './item-edit-control.component.html',
  styleUrls: ['./item-edit-control.component.css']
})
export class ItemEditControlComponent implements OnInit {

  // Ibject representing what we are doing
  @Input() editItem: Item;
  @Input() createItemControl: boolean = false;
  private itemName: string = '';

  // Declare some events that we will send later on
  @Output() onSave: EventEmitter<Item> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (null != this.editItem) {
      this.itemName = this.editItem.name;
    }
  }

  // Save the value of the item
  saveItem(): void {
    if (this.itemName == '') return;

    if (this.createItemControl) {
      this.editItem = new Item();
    }

    // Forward the event
    this.editItem.name = this.itemName;
    this.onSave.emit(this.editItem);
    if (this.createItemControl) {
      this.itemName = '';
    }
  }

  // Cancel editiing the item
  cancelEdit(): void {
    this.onCancel.emit();
    this.itemName = '';
  }

}
