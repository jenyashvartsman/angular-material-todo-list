import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosService } from 'src/app/core/services/todos.service';
import { Todo } from 'src/app/core/types/todo.type';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent implements OnInit {
  todos$?: Observable<Todo[]>;
  search = '';

  constructor(private readonly todosServise: TodosService) {}

  ngOnInit(): void {
    this.todos$ = this.todosServise.getTodos();
  }
}
