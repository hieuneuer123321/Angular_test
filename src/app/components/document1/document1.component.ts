import { Component, OnInit } from '@angular/core';
import { User } from '../../modules/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-document1',
  templateUrl: './document1.component.html',
  styleUrls: ['./document1.component.css'],
})
export class Document1Component implements OnInit {
  data: User[] = [];
  constructor(private pros: UserService) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.pros.getAll().subscribe((dat: any) => {
      console.log(dat);
      this.data = dat;
    });
  }
}
