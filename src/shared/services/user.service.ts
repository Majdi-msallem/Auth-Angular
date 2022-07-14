import { UserAuthService } from './user-auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
      PATH="http://127.0.0.1:8090";
      requestHeader = new HttpHeaders(
        {"No-Auth":"True"}
      )
  constructor(
    private  httpclient :HttpClient,
    private userAuthService:UserAuthService
    ) { }

  public  login(loginData){
    return this.httpclient.post(this.PATH + "/auth",loginData,{headers: this.requestHeader})
  }

      public forUser(){
        return this.httpclient.get(this.PATH + '/user',{
          responseType:'text',
        });
      }

      public forAdmin(){
        return this.httpclient.get(this.PATH + '/admin',{
          responseType:'text',
        });
      }

  public roleMatch(allowedRoles):boolean{
    let isMatch=false ;
    const userRoles:any =this.userAuthService.getRoles();
    console.log("roless",userRoles)
    console.log(allowedRoles)
    if(userRoles!= null && userRoles){
      for(let i=0;i<userRoles.length;i++){
        for(let j=0;j<allowedRoles.length; j++){
        
          if(userRoles[i].roleName==allowedRoles){
            isMatch=true;
            return isMatch;
          }else{
            return isMatch;
          }
        }
      }
    }
  }
}
