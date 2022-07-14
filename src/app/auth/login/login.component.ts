import { Router } from '@angular/router';
import { UserAuthService } from './../../../shared/services/user-auth.service';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data : Date = new Date();
    focus:any;
    focus1:any;

    constructor(
      private userService:UserService, 
      private userAuthService:UserAuthService,
      private router:Router
      ) { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

       
    }
    login(loginForm:NgForm){
     this.userService.login(loginForm.value).subscribe(
      (response:any)=>{
        console.log(response.jwtToken);
        console.log("role",response.user.role[0]);

        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
console.log(response)
       const role=  response.user.role[0].roleName;
       if(role=='d_rh'){
        this.router.navigate(['/test'])
       }else{
        this.router.navigate(['/test'])

       }
      },
      (error)=>{
        console.log(error);
      }
     );
    }
    ngOnDestroy(){

    }

}
