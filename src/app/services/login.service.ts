import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Response } from 'src/model/Response';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public userName: string;
  public friendUser: string;

  constructor(private http: HttpClient, private router: Router) {
    this.userName = null;
    this.friendUser = null;
  }

  signInUser(userName: string, password: string) {

    let loggedUserKey = "loggedUser";
    let friendUserKey = "friendUser";

    if (userName === "thisuser" && password === "thisuser") {
      sessionStorage.setItem(loggedUserKey, "thisuser");
      sessionStorage.setItem(friendUserKey, "thatuser");
      this.router.navigateByUrl('view');
    } else if (userName === "thatuser" && password === "thatuser") {
      sessionStorage.setItem(loggedUserKey, "thatuser");
      sessionStorage.setItem(friendUserKey, "thisuser");
      this.router.navigateByUrl('view');
    }

  }

  getLoggedUser() {

    let loggedUserResponse: Response;


    this.userName = sessionStorage
      .getItem("loggedUser");
    this.friendUser = sessionStorage.getItem("friendUser");

    console.log("logged user: " + this.userName);
    console.log("friend User: " + this.friendUser);

  }
}