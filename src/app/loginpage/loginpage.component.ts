import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  constructor(private authService: AuthService) {}


  inputEmail!:string
  inputPassword!:string
  ngOnInit(): void {}
  tanginamo = 0

  login = true;

  onLogin() {
    console.log(this.inputEmail)
    this.authService.isAuthorized(this.inputEmail, this.inputPassword)
  }



  //non-important functions
  switchpage() {
    this.login = !this.login;
  }


}
