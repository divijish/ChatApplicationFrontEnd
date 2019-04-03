import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  signInUser(userName: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}/login`, { "userName": userName, "password": password }, { responseType: "json" });
  }
}