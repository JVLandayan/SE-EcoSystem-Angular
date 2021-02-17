import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../admin/services/users.service';
import { User } from '../models/useraccount.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  constructor(private userService: UsersService, private router: Router ) {

  }


  userVerify(email: string, password: string) {
   var data =  this.userService.User.find((data:User)=>{
     return data.email == email && data.password == password
    })

    console.log(data)

  }

  _userinfo : any

  //*
  activatedUser(details:User) {
    this._userinfo = details
    console.log(this._userinfo)
  }

  //*

  loggedIn = false


  isAuthorized(email:string,password:string) {
    const currentUser = this.userService.User.find((data:User)=>{
      return data.email == email
    })
    this._userinfo = currentUser
    console.log(currentUser)
    this.login()
  }

  get Userdata() {
    return this._userinfo
  }



  //Login functions
  login() {
    this.loggedIn = true
    this.router.navigate(['/authpanel'])
  }

  logout() {
    this.loggedIn = false
  }

}
