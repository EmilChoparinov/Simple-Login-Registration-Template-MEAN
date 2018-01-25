// DEPENDENCIES
import { Component, OnInit } from '@angular/core';

// PROVIDERS
import { UserService } from './../../../services/user.service';
import { Router } from '@angular/router';

// JSON CLASSES & INTERFACES
import { IUser, User } from '../../../classes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser;
  serverMessage: string;
  constructor(private _router: Router, private _userService: UserService) {
    this.user = new User();
    this.serverMessage = '';
  }

  ngOnInit() {
  }

  login() {
    console.log('in login');
    this._userService.loginUser(this.user, (res) => {
      console.log(res);
      if (res.success) {
        this._router.navigate(['dashboard']);
      } else {
        this.serverMessage = res.output.message;
      }
    });
  }

}
