import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public todos!: Todo[];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todos = this.todoService.todos;
  }

  deleteTodo(todo: Todo): void {
    this.todoService.todos = this.todoService.todos.filter(
      (todoElement: Todo) => {
        console.log(todo.id, todoElement.id);
        return todo.id !== todoElement.id;
      }
    );

    this.todos = this.todoService.todos;
  }

  toggleTodo(todo: Todo): void {
    this.todoService.todos.forEach((todoElement: Todo) => {
      if (todo.id === todoElement.id) {
        todoElement.completed = todo.completed;
      }
    });
  }

  addTodo(todo: Todo): void {
    let lastId: number = 0;

    if (this.todoService.todos.length) {
      lastId =
        this.todoService
        .todos[this.todoService.todos.length - 1]
        .id ?? 1;
    }

    todo.id = lastId + 1;

    this.todoService.todos.push(todo);
  }
}
