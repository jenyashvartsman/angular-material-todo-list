import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../core/types/todo.type';

@Pipe({
  name: 'filterTodos',
})
export class FilterTodosPipe implements PipeTransform {
  transform(todos: Todo[], search: string): Todo[] {
    return !!search
      ? todos.filter((todo) =>
          todo.title.toLowerCase().includes(search.toLowerCase())
        )
      : todos;
  }
}
