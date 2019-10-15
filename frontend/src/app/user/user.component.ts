import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: [User];

  constructor(private userService: UserService, private router: Router) {
    this.getUsers();
  }

  deleteUser(id) {
    this.userService.deteteUser(id).then((result) => {
      this.getUsers();
    });
  }

  getUsers() {
    this.userService.getUsers().then((result) => {
      this.users = result.data;
    });
  }

  updateUser(id) {
    this.router.navigate(['update-user/' + id]);
  }

  ngOnInit() {
  }

}
