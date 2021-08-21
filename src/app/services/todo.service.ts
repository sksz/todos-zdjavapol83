import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos: Todo[] = [
    {
      id: 1,
      title: 'Pierwsze zadanie',
      completed: false,
    }, {
      id: 2,
      title: 'Drugie zadanie',
      completed: true,
    }, {
      id: 3,
      title: 'Trzecie zadanie',
      completed: false,
    }
  ];

  constructor() { }
}
