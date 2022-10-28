import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { TodosListModule } from './components/todos-list/todos-list.module';
import { TodoFormModule } from './components/todo-form/todo-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    TodosListModule,
    TodoFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
