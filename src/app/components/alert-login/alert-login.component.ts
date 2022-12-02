import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../../services/alert.service';
import { User } from 'src/app/modules/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-alert-login',
  templateUrl: './alert-login.component.html',
  styleUrls: ['./alert-login.component.css'],
})
export class AlertLoginComponent implements OnInit {
  private subscription!: Subscription;
  User!: User;
  // username!: string;
  // password!: string;
  // auth!: string;
  powers: string[] = ['User1', 'User2'];
  // userId!: number;
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private UserService: UserService
  ) {}

  submit() {
    const UserUpdate: User = {
      id: this.User.id,
      username: this.User.username,
      password: this.User.password,
      auth: this.User.auth,
    };
    console.log(UserUpdate);
    this.UserService.updateUser(UserUpdate.id, UserUpdate).subscribe((data) => {
      console.log(data);
    });
    this.route.navigate(['/home']);
  }
  ngOnInit() {
    this.getUserById(this.router.snapshot.params['userId']);
  }
  getUserById(id: string) {
    this.UserService.getUsers(id).subscribe((data: any) => {
      this.User = data;
      // this.username = data.username;
      console.log(this.User);
    });
  }
}
