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

  constructor(private http: HttpClient, private router: Router) { }

  signInUser(userName: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}/login`, { "userName": userName, "password": password }, { responseType: "json" });
  }

  getLoggedUser() {

    let loggedUserResponse: Response;

   this.http.get<Response>(`${environment.serverUrl}/loggeduser`, { responseType: "json" }).subscribe(
      (response) => {

        loggedUserResponse = response;

      }, (error) => {
        console.log(error);
        this.router.navigateByUrl('logout');
      }, () => {
        if (loggedUserResponse.status === 'FAILED') {
          this.router.navigateByUrl('logout');
        }

      }

      


    );
  }
}