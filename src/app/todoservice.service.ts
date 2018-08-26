import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Worklist } from './worklist';
import { Mocklist } from './activity-mock';
import { MsgserviceService } from './msgservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  private todosUrl = 'api/todos';
  constructor(private msgser:MsgserviceService,private http: HttpClient) { }
  /* getAllList():Observable<Worklist[]>{
    this.msgser.add('Fetched the latest data');
    return of(Mocklist);
  } */
  getTodoNo404<Data>(id: number): Observable<Worklist> {
    const url = `${this.todosUrl}/?id=${id}`;
    return this.http.get<Worklist[]>(url)
      .pipe(
        map(todos => todos[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Worklist>(`getTodo id=${id}`))
      );
  }
  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Worklist[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Worklist[]>(`${this.todosUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Worklist[]>('searchHeroes', []))
    );
  }
  //////// Save methods //////////
  addTodo (worklist: Worklist): Observable<Worklist> {
    return this.http.post<Worklist>(this.todosUrl, worklist, httpOptions).pipe(
      tap((worklist: Worklist) => this.log(`added ToDO w/ id=${worklist.id}`)),
      catchError(this.handleError<Worklist>('AddedTodo'))
    );
  }
 
  /** DELETE: delete the ToDO from the server */
  deleteTodo (worklist: Worklist | number): Observable<Worklist> {
    const id = typeof worklist === 'number' ? worklist : worklist.id;
    const url = `${this.todosUrl}/${id}`;
 
    return this.http.delete<Worklist>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted ToDO id=${id}`)),
      catchError(this.handleError<Worklist>('deleteToDO'))
    );
  }
 
  /** PUT: update the ToDO on the server */
  updateTodo (worklist: Worklist): Observable<any> {
    return this.http.put(this.todosUrl, worklist, httpOptions).pipe(
      tap(_ => this.log(`updated todo id=${worklist.id}`)),
      catchError(this.handleError<any>('updateTodo'))
    );
  }
  getAllList():Observable<Worklist[]>{
    return this.http.get<Worklist[]>(this.todosUrl)
    .pipe(
      tap(todos => this.log('fetched todos')),
      catchError(this.handleError('getAllList', []))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getListPerId(id: number): Observable<Worklist> {
    /* this.msgser.add(`fetched activity id=${id}`);
    return of(Mocklist.find(worklist => worklist.id === id)); */
    const url = `${this.todosUrl}/${id}`;
    return this.http.get<Worklist>(url).pipe(
    tap(_ => this.log(`fetched todo id=${id}`)),
    catchError(this.handleError<Worklist>(`getList id=${id}`))
    );
  }
  private log(message: string) {
    this.msgser.add(`Todoservice: ${message}`);
  }
}
