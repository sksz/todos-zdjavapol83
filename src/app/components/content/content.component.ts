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
    this.todoService.getTodos().subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
      }
    );
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo).subscribe(
      () => {
        this.todos = this.todos.filter(
          (todoElement: Todo) => {
            return todo.id !== todoElement.id;
          }
        );
      }
    );
  }

  toggleTodo(todo: Todo): void {
    this.todoService.modifyTodo(todo);
  }

  addTodo(todo: Todo): void {
    this.todoService.addTodo(todo).subscribe(
      (todo: Todo) => {
        this.todos.push(todo);
      }
    );
  }
}
