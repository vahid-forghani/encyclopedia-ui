import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/security/auth.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  readonly auth = this.authService;

  users: User[] = [];
  clonedUsers: { [s: string]: User; } = {};

  constructor(private userService: UserService, private messageService: MessageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value);
  }

  onRowEditInit(user: User): void {
    this.clonedUsers[user.id] = {...user};
  }

  onRowEditSave(user: User): void {
    user.roles = user.roles.toString().split(',');
    this.userService.save(user).subscribe();
    delete this.clonedUsers[user.id];
  }

  newUser(): void {
    this.userService.save({} as User).subscribe(_ => this.ngOnInit());
  }

  onRowDelete(user: User): void {
    this.userService.delete(user.id).subscribe({
      next: _ => this.ngOnInit(),
      error: (error) => this.messageService.add({severity:'error', summary:'Error', detail: JSON.stringify(error)})});
  }

  onRowEditCancel(user: User, index: number) {
    this.users[index] = this.clonedUsers[user.id];
    delete this.clonedUsers[user.id];
  }

}
