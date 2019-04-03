import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  signInUser(userName: string, password: string): Observable<any> {
    return this.http.post<any>("${config.server.url}\login", { "userName": userName, "password": password }, { responseType: "json" });
  }
}