import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/useraccount.model';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css'],
})
export class AdminpageComponent implements OnInit {
  constructor(public router: Router, private authService: AuthService) {
  }

  activeUser!: User

  ngOnInit(): void {
    this.activeUser = this.authService.Userdata
    console.log(this.activeUser)
  }



  onLogout() {
    this.authService.logout()
  }









}
