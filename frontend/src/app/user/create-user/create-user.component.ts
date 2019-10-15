import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  user: User;
  id: string = null;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.user = new User();

    if (this.id !== null) {
      this.userService.getUser(this.id).then((result) => {
        this.user.id = result.id;
        this.user.name = result.name;
        this.user.email = result.email;
        this.user.status = result.status;
        this.user.hourlyRate = result.hourlyRate;
        this.user.dateOfBirth = new Date(result.dateOfBirth);
      });
    }
  }

  onSubmit(form) {
    this.user.id = form.value.id;
    this.user.name = form.value.name;
    this.user.email = form.value.email;
    this.user.status = form.value.status;
    this.user.hourlyRate = form.value.hourlyRate;
    this.user.dateOfBirth = new Date(form.value.dateOfBirth);
    if (form.value.id !== null) {
      this.userService.updateUser(this.user).then((result) => {
        this.user = result;
        this.router.navigate(['']);
      });
    } else {
      this.userService.createUser(this.user).then((result) => {
        this.user = result;
        this.router.navigate(['']);
      });
    }
  }

  ngOnInit() {
  }

}
