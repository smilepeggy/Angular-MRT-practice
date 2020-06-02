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
  birthday = new Date(1988, 3, 15); // April 15, 1988
  color: string;
  condition: false;
}
