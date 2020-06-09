import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getheroes();
  }
  getheroes(): void {
    this.heroService.getHeroes().subscribe(result => {
      this.heroes = result.slice(1, 5); // 第2個取到第5個結束
    });
  }


}
