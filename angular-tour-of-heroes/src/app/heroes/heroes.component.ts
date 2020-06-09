import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes'; // 改用service取代
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // heroes = HEROES;
  heroes: Hero[] = [];
  // selectedHero: Hero;

  ngOnInit() {
    this.getheroes();
  }
  // onSelect(h: Hero): void {
  //   this.selectedHero = h;
  //   console.log('on Select');
  //   this.messageService.add(`HeroService: Selected hero id=${h.id}`);
  // }
  // getheroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getheroes(): void {
    this.heroService.getHeroes().subscribe(result => {
      this.heroes = result;
      // console.log(this.heroes);

    });
  }


}
