// src/app/services/usersService.ts
import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  private _users; //class property

//   constructor(){
//     this._users = [{
//       id: 34,
//       username: 'spiderman',
//       roles: ['admin', 'user']
//     }, {
//       id: 67,
//       username: 'batman',
//       roles: ['user']
//     }];
//   }
//   get() {
//     return this._users;
//   }

    // src/app/services/usersService.ts
    private http;
    constructor(http: Http) {
    this.http = http;
    }
    get() {
    return this.http.get('/assets/users.json')
        .map(response => response.json().users);
    }

    public ngOnInit() {
        console.log('SARVICE');
    }
}