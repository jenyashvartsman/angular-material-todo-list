import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TodosListComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  exports: [TodosListComponent],
})
export class TodosListModule {}
