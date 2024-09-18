import { Routes } from '@angular/router';
import { TodosComponent } from './pages/todos/todos.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'todos', title: 'Todos Page', component: TodosComponent },
  { path: 'posts', title: 'Posts Page', component: PostsComponent },
  {
    path: '**',
    title: 'Page Not Found',
    component: PageNotFoundComponent,
  },
];
