import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Response } from 'src/model/Response';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userName: FormControl;
  password: FormControl;
  loginFormGroup = this.fb.group({
    'userName': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required)

  });


  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {



  }

  login(): void {

    let loginResponse: Response;

    this.loginService.signInUser(this.loginFormGroup.controls['userName'].value,
      this.loginFormGroup.controls['password'].value).subscribe((response) => {
        loginResponse = response;
        console.log(loginResponse);
      }, (error) => {
        console.log(error)
      }, () => {
        if (loginResponse.status == 'SUCCESS') {
          this.router.navigateByUrl('view');
        } else { alert(loginResponse.message) }
      });
  }

  ngOnInit() {
  }

}
