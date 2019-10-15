import { Injectable, OnInit } from '@angular/core';
import { FeathersService } from '../shared/feathers.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userService;

  constructor(
    private feathers: FeathersService
  ) {
    this.userService = this.feathers.createService<User>('user');
  }

  public createUser(user: User) {
    return this.userService.create(user);
  }

  public getUsers() {
    return this.userService.find();
  }

  public getUser(id) {
      return this.userService.get(id);
  }

  public updateUser(user: User) {
    return this.userService.patch(user.id, user);
  }

  public deteteUser(id) {
    return this.userService.remove(id);
  }
}
