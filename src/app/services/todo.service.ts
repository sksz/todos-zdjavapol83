import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url: string = 'https://jsonplaceholder.typicode.com/todos';
  private limit: string = '?_limit=5';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${this.url}${this.limit}`);
  }

  public addTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(
      this.url,
      todo,
      httpOptions
    );
  }

  public deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.url}/${todo.id}`;

    return this.httpClient.delete<Todo>(url, httpOptions);
  }

  public modifyTodo(todo: Todo): Observable<Todo> {
    const url = `${this.url}/${todo.id}`;

    return this.httpClient.put<Todo>(
      url,
      todo,
      httpOptions
    );
  }
}
