import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnlessDirective } from './unless.directive';

import { HeroBirthdayComponent } from './hero-birthday1.component';
import { HeroBirthday2Component } from './hero-birthday2.component';
import { FormsModule } from '@angular/forms';
import { PowerBoosterComponent } from './power-booster.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';

import { PowerBoostCalculatorComponent } from './power-boost-calculator.component';

import { FlyingHeroesComponent, FlyingHeroesImpureComponent } from './flying-heroes.component';
import { FlyingHeroesImpurePipe, FlyingHeroesPipe } from './flying-heroes.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroBirthdayComponent,
    HeroBirthday2Component,
    PowerBoosterComponent,
    ExponentialStrengthPipe,
    PowerBoostCalculatorComponent,
    FlyingHeroesComponent,
    FlyingHeroesImpureComponent,
    FlyingHeroesImpurePipe,
    FlyingHeroesPipe,
    UnlessDirective,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
