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

  userData!: User

  //*
  activatedUser(details:User) {
    this.userData = details
    console.log(this.userData)
  }

  //*

  loggedIn = false

  isAuthenticated()   {
    if (this.userData!==null || this.userData!==undefined)
    return true
    else
    return false
  }

  isAuthorized(email:string,password:string) {
    const currentUser = this.userService.User.find((data:User)=>{

    })
    console.log(currentUser)
    console.log(this.userService.User)
    console.log(email)

    this.login()
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
