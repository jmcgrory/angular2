import { Component } from '@angular/core';
import { UsersService } from '../services/usersService';

// src/app/users/users.component.ts
@Component({
  selector: 'users', //<users></users>
  styles: [`.superuser { background: #f25; }`],
  template: `<h1>Users</h1>
  <table>
    <tr>
        <td *ngFor="let user of userslist | async" [class.superuser]="user.superuser">
            <strong>{{ user.id }}</strong> {{ user.username }}<span *ngIf="user.superuser">supe</span>
        </td>
    </tr>
    </table>
`
})

// src/app/users/users.component.ts
export class Users {
  private userslist;
  constructor(users: UsersService) {
    this.userslist = users.get();
  }
}