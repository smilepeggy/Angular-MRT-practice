import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';



@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule
  ],
  exports: [TodoListComponent] // 讓其他Module也可以使用
})
export class TodoListModule { }
