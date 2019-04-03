import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userName: FormControl;
  password: FormControl;
  loginFormGroup = this.fb.group({
    userName: new FormControl(''),
    password: new FormControl('')

  });


  constructor(private fb: FormBuilder, private loginService: LoginService) {



  }

  login(): void {
    this.loginService.signInUser(this.loginFormGroup.get('userName').value, this.loginFormGroup.get('password').value).subscribe((response) => {
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
