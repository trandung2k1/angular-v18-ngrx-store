import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import todosReducer from './store/reducers/todo.reducer';
export function logger(reducer: any) {
  return (prevState: any, action: any) => {
    console.group(action.type);
    console.log('PrevState : ', prevState);
    console.log('Action : ', action);
    const newState = reducer(prevState, action);
    console.log('NewState : ', newState);
    console.groupEnd();
    return newState;
  };
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch()),
    provideStore({
      todosReducer: logger(todosReducer),
    }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: true,
      monitor: (state, action) => {
        // console.group(action.type);
        // console.log('Action : ', action);
        // console.log('PrevState : ', state);
        // console.groupEnd();
      },
    }),
    provideClientHydration(),
  ],
};
