import { Component } from '@angular/core';
import { Message } from './message';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyMessageBoard';
  name = '';
  content = '';
  messages: Message[] = [];
  data: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    let url = '/opendata/datalist/apiAccess?scope=resourceAquire&rid=0b544701-fb47-4fa9-90f1-15b1987da0f5';
    // this.data = this.http.get(url).map(x => x.json());
    this.data = this.http.get(url)
      .pipe(map((res) => res));
  }
  // 防呆，避免名稱或內容是空值時也可以留言
  // 方法一： 缺點：空白鍵可以輸入
  // addMessage() {
  //   if (this.name === '' || this.content === '') {//
  //     alert('check name and content are not empty');
  //     return false;
  //   }
  // }
  addMessage(): void {
    console.log('add');
    // 方法二：改善方法一
    if (!this.name.trim() || !this.content.trim()) { // 有可以trim的話代表非空值
      alert('check name and content are not empty');
      // return ; // 有無都沒差
    } else {
      // 用名稱跟內容產生一個留言的資料物件
      const message = new Message(this.name, this.content);
      this.messages.push(message);
      this.content = '';
    }

  }
}
