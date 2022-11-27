import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { User } from 'src/app/modules/user';
@Component({
  selector: 'app-document2',
  templateUrl: './document2.component.html',
  styleUrls: ['./document2.component.css'],
})
export class Document2Component implements OnInit {
  username: string = '';
  password: string = '';
  auth: string = '';
  password_config: string = '';
  powers: string[] = ['Admin', 'Manager', 'User'];

  constructor(private pros: UserService, private router: Router) {}

  ngOnInit(): void {}
  submit() {
    const User: User = {
      id: 0,
      username: this.username,
      password: this.password,
      auth: this.auth,
    };
    if (this.password_config.toLowerCase !== this.password.toLowerCase) {
    } else {
      this.pros.addUser(User).subscribe((data) => {
        console.log(data);
      });
      this.router.navigate(['/document1']);
    }
  }
}
