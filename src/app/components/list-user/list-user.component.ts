import { Component, OnInit } from '@angular/core';
import { User } from '../../modules/user';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  data: User[] = [];
  constructor(private pros: UserService, private router: Router) {}

  ngOnInit(): void {
    // this.getAll();
  }
  // getAll() {
  //   this.pros.getAll().subscribe((dat: any) => {
  //     console.log(dat);
  //     this.data = dat;
  //   });
  // }
  functionOnWhichRedirectShouldHappen() {
    this.router.navigate(['/doccument/document2']);
  }
}
