import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  clonedUsers: { [s: string]: User; } = {};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value);
  }

  onRowEditInit(user: User): void {
    this.clonedUsers[user.id] = {...user};
  }

  onRowEditSave(user: User): void {
    this.userService.save(user).subscribe();
    delete this.clonedUsers[user.id];
  }

  onRowEditCancel(user: User, index: number) {
    this.users[index] = this.clonedUsers[user.id];
    delete this.clonedUsers[user.id];
  }

}
