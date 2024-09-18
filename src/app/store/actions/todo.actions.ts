import { createAction, props } from '@ngrx/store';

export const getTodos = createAction('GET_TODOS', props<{ todos: any[] }>());
export const addTodo = createAction('ADD_TODO', props<{ todo: any }>());
export const browserReload = createAction(
  '[Todo Component] Browser Reload',
  props<{ todos: any[] }>()
);

export const deletedTodo = createAction('DELETE_TODO', props<{ id: string }>());
