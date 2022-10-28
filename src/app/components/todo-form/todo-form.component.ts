import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/types/todo.type';
import { v4 as uuidv4 } from 'uuid';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  todoForm!: FormGroup<{
    title: FormControl<string>;
    description: FormControl<string>;
  }>;

  todoToEdit?: Todo;

  constructor(
    private fb: FormBuilder,
    private todosService: TodosService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) private data: Todo
  ) {}

  ngOnInit(): void {
    this.todoToEdit = this.data;
    this.createTodoForm();
  }

  createTodoForm(): void {
    this.todoForm = this.fb.group({
      title: new FormControl(this.todoToEdit?.title || '', [
        Validators.required,
      ]),
      description: new FormControl(this.todoToEdit?.description || ''),
    }) as FormGroup;
  }

  submitTodoForm(): void {
    const todo: Todo = {
      id: this.todoToEdit?.id || uuidv4(),
      title: this.todoForm.controls.title.value,
      description: this.todoForm.controls.description.value,
      createdAt: this.todoToEdit?.createdAt || new Date(),
      isComplete: this.todoToEdit?.isComplete || false,
    };

    this.todoToEdit
      ? this.todosService.editTodo(todo)
      : this.todosService.createTodo(todo);

    this.snackBar.open(`${todo.title}, saved`);
  }
}
