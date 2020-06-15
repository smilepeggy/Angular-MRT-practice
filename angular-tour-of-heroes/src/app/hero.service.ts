import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  //  Type 'Observable<Hero[]>' is missing the following properties from type 'Hero[]': length, pop, push, concat, and 25 more.


  /**  getHeroes with RxJs 'of()' */
  // getHeroes(): Observable<Hero[]> {
  //   this.messageService.add('HeroService: fetched heroes');
  //   return of(HEROES);
  // }

  /** GET heroes from the server 替換上面 */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl) // <Hero[]> 減少TS編譯錯誤
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  // getHeroid1
  // getHeroid(id: any): Observable<Hero> {
  //   this.messageService.add(`HeroService: fetched hero id= ${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }
  /** getHeroid2 GET hero by id. Will 404 if id not found */
  getHeroid(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }



  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions) // put取代資源
      .pipe(
        tap(_ => this.log(`update hero id = ${hero.id}`)),
        catchError(this.handleError(`updateHero`))
      );
  }

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap((newHero: Hero) => this.log(`add hero w/ id=${newHero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: Hero): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    console.log(id);
    console.log(url);
    return this.http.delete<Hero>(url, this.httpOptions)
      .pipe(
        // tap(x => console.log(`deleted hero id = ${id}`)),
        // tap(_ => console.log(this.log)),
        tap(_ => this.log(`deleted hero id = ${id}`)),
        catchError(this.handleError<Hero>('delete Hero'))
      );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
      .pipe(
        tap(x => x.length ? this.log(`found heroes matching "${term}"`) : this.log(`no heroes matching "${term}"`)),
          catchError(this.handleError<Hero[]>('searchHeroes', []))
      );
  }


}
