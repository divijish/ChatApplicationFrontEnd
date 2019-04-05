import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/model/user';
import { UserService } from 'src/app/services/user.service';
import { MessageDetail } from 'src/model/messageDetail';
import { ChatService } from 'src/app/services/chat.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {


  onlineUsers: User[] = [];
  messageSet: Set<MessageDetail> = new Set<MessageDetail>();
  chatFormGroup:FormGroup;
  messageControl: FormControl;

  constructor(public formBuilder: FormBuilder, public loginService: LoginService,
    private userService: UserService,
    private chatService: ChatService) {

    let sentMessage: MessageDetail = new MessageDetail();
    sentMessage.message = "sending";
    sentMessage.messageTime = "Just Now";
    sentMessage.operation = "";

    let receivedMessage: MessageDetail = new MessageDetail();
    receivedMessage.message = "receiving";
    receivedMessage.messageTime = "Just Now";
    receivedMessage.operation = "RECEIVING";

    this.messageSet.add(sentMessage);
    this.messageSet.add(receivedMessage);

    this.chatFormGroup = this.formBuilder.group({
      'messageControl': new FormControl('', Validators.required),
  
    });

    let receiveMessage = setInterval(this.receiveMessage, 1000);

  }

  ngOnInit() {

    this.loginService.getLoggedUser();

    this.userService.getUser().subscribe(
      (response) => {

        this.onlineUsers = response.result;

      }, (error) => {

        console.log(error);

      }, () => {
        console.log("Fetching user operation finished.");
      }

    );

    //


  }

  receiveMessage() {

    let messages: MessageDetail[];
    this.chatService.receiveMessage().subscribe(

      (response) => {
        messages = response.result;
      }, (error) => {
        console.log(error);
      }, () => {
        messages.forEach(message => {
          this.messageSet.add(message);
        });
      }
    );

  }

  sendMessage() {

    let message = this.chatFormGroup.controls['messageControl'].value;

    this.chatService.sendMessage(message);
    let senderMessage = new MessageDetail();
    senderMessage.message = message;
    senderMessage.messageTime = new Date();
    senderMessage.operation = "";
    this.messageSet.add(new MessageDetail())

  }

}
