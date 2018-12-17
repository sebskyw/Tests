import { Injectable } from '@angular/core';
import { Item } from '../model/item';

const STORAGE_NAME = 'todo_list_app_storage';

@Injectable()
export class ListService {

  private _todoListItems: Item[];

  // We need try to obtain list of elements as soon as we construct the object \
  // hence we will get stuff from storage right now
  constructor() {
    this.reloadStorage();
  }

  public getItemList(): Item[] {
    return this.getCollection();
  }

  private reloadStorage() {
    let storageData = localStorage.getItem(STORAGE_NAME);
    // Parse JSON DATA
    this._todoListItems = JSON.parse(storageData);
  }

  private updateStorage() {
    let data = JSON.stringify(this._todoListItems);
    localStorage.setItem(STORAGE_NAME, data);
  }

  public addItem(item: Item) {
    let collection = this.getCollection();
    collection.push(item);
    this.updateStorage();
  }

  public deleteItem(item: Item) {
    let collection = this.getCollection();
    let index = collection.indexOf(item);
    if (index == -1) return;

    // Remove item at selected index
    collection.slice(index, 1);
    console.log(collection);
    this.updateStorage();
  }

  private getCollection(): Item[] {
    if (null == this._todoListItems) this._todoListItems = [];
    return this._todoListItems;
  }
}
