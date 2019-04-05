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
/*
Made changes for dev environment
*/ 
  login(): void {

    let loginResponse: Response;

    this.loginService.signInUser(this.loginFormGroup.controls['userName'].value,
      this.loginFormGroup.controls['password'].value);
  }

  ngOnInit() {
  }

}
