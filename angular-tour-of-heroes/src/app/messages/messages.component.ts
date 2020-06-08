import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages: any = '';
  constructor(public messageService: MessageService) {
  }

  // The messageService property must be public because you're going to bind to it in the template.
  // Angular only binds to public component properties.
  ngOnInit() {
    // this.messages = this.messageService.messages;
    // console.log(this.messages);
  }


}


