import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  //  Type 'Observable<Hero[]>' is missing the following properties from type 'Hero[]': length, pop, push, concat, and 25 more.

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHeroid(id: any): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id= ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
