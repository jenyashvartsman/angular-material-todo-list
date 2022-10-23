import { Component } from '@angular/core';
import { TodosService } from './core/services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-material-todo-list';

  constructor(private readonly todosServise: TodosService) {
    this.todosServise.getTodos().subscribe((todos) => console.table(todos));
  }
}
