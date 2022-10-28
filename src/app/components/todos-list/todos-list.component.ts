import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/types/todo.type';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent implements OnInit {
  todos$?: Observable<Todo[]>;
  search = '';

  constructor(
    private todosService: TodosService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todos$ = this.todosService.getTodos();
  }

  toggleCompleteTodo(todo: Todo): void {
    this.todosService.toggleTodoComplete(todo.id);
    this.showUserMessage(
      `${todo.title}, ${todo.isComplete ? 'completed' : 're-opend'}`
    );
  }

  deleteTodo(todo: Todo): void {
    this.todosService.deleteTodo(todo.id);
    this.showUserMessage(`${todo.title}, deleted`);
  }

  openEditTodoDialog(todo: Todo): void {
    this.dialog.open(TodoFormComponent, { width: '480px', data: todo });
  }

  showUserMessage(message: string): void {
    this.snackBar.open(message, undefined, { duration: 3000 });
  }
}
