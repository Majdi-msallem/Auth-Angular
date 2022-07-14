import { UserService } from './../../shared/services/user.service';
import { Router } from '@angular/router';
import { UserAuthService } from './../../shared/services/user-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(
    private userAuthService:UserAuthService,
    private Router:Router,
    public userService:UserService
    ) { }

  ngOnInit(): void {
  }
  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }
  

  public logout(){
    this.userAuthService.clear();
    this.Router.navigate(['/log'])
  }


}
