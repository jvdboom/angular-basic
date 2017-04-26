import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { MessageStatusService } from '../services/message-status.service';
import { MessageStatus } from '../models/messagestatus';

@Component({
  selector: 'app-message-status',
  templateUrl: './message-status.component.html',
  styleUrls: ['./message-status.component.css']
})
export class MessageStatusComponent implements OnInit {
  private messageStatusList: Observable<MessageStatus[]>;

  constructor(private messageStatusService: MessageStatusService) {
    //this.messageStatuss = messageStatusService.getMessageStatus("MessageStatus");
    this.messageStatusList = messageStatusService.orderedArticles;
   }

  ngOnInit() {
  }

}
