import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { todos } from '../db/db';
import { Todo } from '../types/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly todos$: BehaviorSubject<Todo[]> = new BehaviorSubject(todos);

  constructor() {}

  getTodos(): Observable<Todo[]> {
    return this.todos$.asObservable();
  }

  deleteTodo(id: string): void {
    const todos = this.todos$.getValue().filter((todo) => todo.id !== id);
    this.todos$.next(todos);
  }

  createTodo(todo: Todo): void {
    const todos = this.todos$.getValue();
    this.todos$.next([...todos, todo]);
  }

  editTodo(todoToEdit: Todo): void {
    const todos = this.todos$.getValue();
    const todo = todos.find((todo) => todo.id === todoToEdit.id);

    if (todo) {
      Object.assign(todo, todoToEdit);
      this.todos$.next(todos);
    }
  }

  toggleTodoComplete(id: string): void {
    const todos = this.todos$.getValue();
    const todo = todos.find((todo) => todo.id === id);

    if (todo) {
      todo.isComplete = !todo?.isComplete;
      this.todos$.next(todos);
    }
  }
}
