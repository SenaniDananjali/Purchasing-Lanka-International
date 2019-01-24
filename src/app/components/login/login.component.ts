import { Component, OnInit } from '@angular/core';
import {Login} from "./login";
import {DataService} from '../../services/data.service';

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
  user: Login[];

  countries = ['india', 'canada', 'us'];

  constructor(private dataService: DataService) {
  }


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


  display(email: string, password: string) {
    let user: Login = <Login>{};
    user.email = email;
    user.password = password;
    if (!(email == null || password || null)){
      // this.addingCompany.message =('Required values cannot be empty')
      // console.log(id, name);
    }else {
      this.dataService.getAccountDetails(user)
        .subscribe(() => {
            console.log(user);
            this.user.push(user);

          }
          , (err) => {
            if (err.error instanceof Error) {
              // this.addingCompany.message = (`Code ${err.status}, Error: ${err.error.errorMessage} (server error)`)
            } else {
              // this.addingCompany.message = (`Code ${err.status}, Error: ${err.error.errorMessage} (server error)`)

            }
          }
          , () => {
            window.alert("Company Successfully added");

          }
        );
    }
  }


}
