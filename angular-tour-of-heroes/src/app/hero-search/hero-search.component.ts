import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes$ = this.searchTerms
      .pipe(
        debounceTime(300), // 每次擊鍵後等待300毫秒，然後再搜尋他
        distinctUntilChanged(), // 假如與上次的值相同則忽略
        switchMap((term: string) =>
          this.heroService.searchHeroes(term)),
        // 當term變更時更新搜索結果，它取消並丟棄先前的搜索可見性，只返回最新的可見的搜索服務。

      );

  }

  search(term: string): void {
    this.searchTerms.next(term);
  }


}
