import { Component } from '@angular/core';
import { Message } from './message';
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
