import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTodosPipe } from './filter-todos.pipe';

@NgModule({
  declarations: [FilterTodosPipe],
  imports: [CommonModule],
  exports: [FilterTodosPipe],
  providers: [FilterTodosPipe],
})
export class PipesModule {}
