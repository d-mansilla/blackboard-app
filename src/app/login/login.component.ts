import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service.client';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //class variables
  username: string;
  password: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }


  login(username, password) {
    console.log(username, password);
    const user = this.userService.findUserByCredentials(username, password);
    if(user != null)
    {
      this.router.navigate( ['profile', user._id]);
    }
  }
}



