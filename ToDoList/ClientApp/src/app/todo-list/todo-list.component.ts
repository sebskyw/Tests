import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { ListService } from '../services/list-service.service'

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public Items: Item[];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.reloadList();
  }

  onAddNew(item: Item) {
    this.listService.addItem(item);
    this.reloadList();
  }

  onRemoveItem(item: Item) {
    this.listService.deleteItem(item);
    this.reloadList();
  }

  private reloadList() {
    this.Items = this.listService.getItemList();
  }

}
