import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(
      `https://jsonplaceholder.typicode.com/todos?_limit=10`,
      {}
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('Client-side error:', error.error.message);
    } else {
      // Server-side error
      console.error(`Server-side error: ${error.status} - ${error.message}`);
    }
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }
}
