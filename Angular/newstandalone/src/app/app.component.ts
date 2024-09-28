import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent
{
  users =DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser()
  {
    return this.users.find((users) => users.id === this.selectedUserId)!;
  }

  onSelectUser(id:string)
  {
    this.selectedUserId = id;
    console.log('Selected user with id' + id);
  }

}
