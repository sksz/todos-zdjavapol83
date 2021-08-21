import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  public title: string = '';

  @Output()
  addTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddTodo(): void {
    const todo: Todo = {
      title: this.title,
      completed: false,
    };

    this.addTodo.emit(todo);
  }

  onKeydown(event: any): void {
    if (event.key === 'Enter') {
      this.onAddTodo();
    }
  }
}
