import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoItems: any[] = [
    {
      text: 'Learning Angular',
      completed: true
    },
    {
      text: 'Practice Angular',
      completed: false
    }
  ];
  newTodoItem = ''

  constructor() { }
  ngOnInit() {
  }
  addTodoItem() {
    this.todoItems.push({
      text: this.newTodoItem,
      completed: false
    });
    this.newTodoItem = '';
  }

  delete(id) {
    // alert("From Parent: " + id);
    this.todoItems.splice(id, 1);
  }

}
