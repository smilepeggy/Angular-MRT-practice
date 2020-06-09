import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router'; // 傳id
import { Location } from '@angular/common';

import { HeroService } from '../hero.service'; // 顯示hero
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }
  // @Input() hero: Hero;

  ngOnInit() {
    this.getHeroid();
  }

  getHeroid(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // 用route.snapshot.paramMap.get取得Routing時傳入的變數
    // JavaScript (+) operator converts the string to a number
    this.heroService.getHeroid(id).subscribe(result => {
      this.hero = result;
      console.log(result);
    });
    console.log(id);

  }
  goBack(): void {
    this.location.back();
  }
}

