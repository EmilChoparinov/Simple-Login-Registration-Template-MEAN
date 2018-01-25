// DEPENDENCIES
import { Component, OnInit } from '@angular/core';

// JSON CLASSES & INTERFACES
import { IServerMessage } from '../../interfaces/server-message';

// PROVIDERS
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router: Router, private _userService: UserService) { }

  ngOnInit() {
    this._userService.ensureUserIsLoggedIn((res) => {
      console.log(res);
      if (!res.success) {
        this._router.navigateByUrl('/');
      }
    });
  }

  logout() {
    this._userService.logoutUser((response) => {
      this._router.navigate(['']);
    });
  }

}
