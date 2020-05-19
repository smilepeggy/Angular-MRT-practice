import { Component } from '@angular/core';
// Constant
import { stationList } from './station-list.const';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-MRT-practice';
  list = stationList;
}
