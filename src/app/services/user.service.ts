import { Injectable } from '@angular/core';
import { Response } from 'src/model/Response';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router:Router, private http:HttpClient) { }

public getUser():Observable<Response>{

  return this.http.get<Response>(`${environment.serverUrl}/users`, {responseType:"json"});
}


}
