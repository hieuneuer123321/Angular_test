import { Component, OnInit } from '@angular/core';
import { User } from '../../modules/user';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-document1',
  templateUrl: './document1.component.html',
  styleUrls: ['./document1.component.css'],
})
export class Document1Component implements OnInit {
  data: User[] = [];
  url: string = this.router.url;
  constructor(private pros: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    console.log(this.pros.getAll().subscribe());

    this.pros.getAll().subscribe((dat: any) => {
      if (dat) {
        console.log(dat);
      } else {
        console.log('test');
      }
      this.data = dat;
    });
  }
  // functionOnWhichRedirectShouldHappen() {
  //   this.router.navigate(['/doccument/document2']);
  // }
}
