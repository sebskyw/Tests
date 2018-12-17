import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ItemEditControlComponent } from './item-edit-control/item-edit-control.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ListItemComponent } from './list-item/list-item.component';

import { ListService } from './services/list-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListComponent,
    ItemEditControlComponent,
    ItemListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: TodoListComponent, pathMatch: 'full' },
    ])
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
