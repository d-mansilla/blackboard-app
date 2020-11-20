import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
import { UserService } from '../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // constructor(private activatedRoute: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.activatedRoute
  //   .params
  //   .subscribe(params =>
  //   this.userId = params['userId']);

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) { }
  userId: Number;
  userName: String;
  userObject: Object;


    ngOnInit(): void {
    this.activatedRoute
    .params
    .subscribe(params =>
    this.userId = params['userId']);

    const user = this.userService.findUserById(this.userId);
    this.userName = user.username;

    

 
  }










}




