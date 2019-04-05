import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Response } from 'src/model/Response';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }



  sendMessage(message: string) {
    let loggedUser: string = sessionStorage.getItem("loggedUser");
    let friendUser: string = sessionStorage.getItem("friendUser");
    this.http.post(`${environment.serverUrl}/message/${loggedUser}/${friendUser}`,{"message":message }, { responseType: "json" })
  }

  receiveMessage():Observable<Response>{
    let loggedUser: string = sessionStorage.getItem("loggedUser");
    let friendUser: string = sessionStorage.getItem("friendUser");
   return this.http.get<Response>(`${environment.serverUrl}/message/${loggedUser}/${friendUser}`, { responseType: "json" })
  }

}
