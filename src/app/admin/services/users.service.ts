import { Injectable } from '@angular/core';
import { User } from 'src/app/models/useraccount.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _dummyUsers: User[] = [{
    userId : 2018111629,
    authId : 1,
    first_name: 'Billy',
    last_name: 'Eillish',
    email: 'jvlandayan@gmail.com',
    password: 'billypassword',
    forgot_password_id: '',
    media_id: 0
  },{
    userId : 2018111629,
    authId : 2,
    first_name: 'Cardy Bernardino',
    last_name: 'Eillish',
    email: 'billyeillish@gmail.com',
    password: 'billypassword',
    forgot_password_id: '',
    media_id: 0
  },{
    userId : 2018111629,
    authId : 2,
    first_name: 'Billy',
    last_name: 'Eillish',
    email: 'billyeillish@gmail.com',
    password: 'billypassword',
    forgot_password_id: '',
    media_id: 0
  }]

  get User () {
    return this._dummyUsers
  }

  constructor() { }
}
