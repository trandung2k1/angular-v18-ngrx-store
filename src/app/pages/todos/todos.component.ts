import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { browserReload, getTodos } from '../../store/actions/todo.actions';
import { take } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: any[] = [];
  title = '';
  constructor(
    private todosService: TodosService,
    private store: Store<{ todosReducer: any }>
  ) {}
  ngOnInit(): void {
    this.store.dispatch(browserReload({ todos: this.todos }));
    this.todosService.getTodos().subscribe((data) => {
      this.store.dispatch(getTodos({ todos: data }));
      this.store
        .pipe(take(1))
        .subscribe((s) => (this.todos = s.todosReducer.todos));
    });
  }

  updateTitle(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    console.log(inputElement.value);
  }
}
