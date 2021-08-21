import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  todo!: Todo;

  @Output()
  deleteTodo: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(todo: Todo): void {
    this.todo.completed = !this.todo.completed;

    this.toggleTodo.emit(todo);
  }

  onDelete(todo: Todo): void {
    this.deleteTodo.emit(todo);
  }

  setClasses(): string {
    let classes = 'todo';

    if (this.todo.completed) {
      classes += ' is-completed';
    }

    return classes;
  }
}
