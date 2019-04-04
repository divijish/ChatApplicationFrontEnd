import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {


  onlineUsers: User[] = [];

  constructor(public loginService: LoginService, private userService: UserService) {

    


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

  }

}
