import { Component, OnInit } from '@angular/core';
import {Signup} from './signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  title = '';
  passwordConfirmationFailed = false;
  passwordConfirmationTxt = '';

  signup = new Signup('', '', '', '');

  countries = ['india', 'canada', 'us'];

  confirmPassword() {
    if (this.signup.password === this.passwordConfirmationTxt) {
      this.passwordConfirmationFailed = false;
    } else {
      this.passwordConfirmationFailed = true;
    }
  }

  onSubmit() {
    console.log('Name: ' + this.signup.name + ', Email: ' + this.signup.email + ', Password: ' + this.signup.password );
  }

}