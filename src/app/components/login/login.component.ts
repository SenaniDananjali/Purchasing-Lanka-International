import { Component, OnInit } from '@angular/core';
import {Login} from "./login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  title = '';
  passwordConfirmationFailed = false;
  passwordConfirmationTxt = '';

  login = new Login ('', '');

  countries = ['india', 'canada', 'us'];

  confirmPassword() {
    if (this.login.password === this.passwordConfirmationTxt) {
      this.passwordConfirmationFailed = false;
    } else {
      this.passwordConfirmationFailed = true;
    }
  }

  onSubmit() {
    console.log(this.login.email + ', Password: ' + this.login.password );
  }


}
