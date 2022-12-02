import { Component, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../../modules/user';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  data: User[] = [];
  url: string = this.router.url;
  userId: any = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser') || '{}')
    : false;
  constructor(private pros: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
  }
  deleteUser(id: number) {
    Swal.fire({
      title: '<strong>Are you sure?</strong>',
      icon: 'warning',
      html: `You really can't go back after this, We can't retrieve it either!`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      reverseButtons: true,
      focusCancel: true,
      cancelButtonText: `Cancel`,
      confirmButtonText: `Delete User`,
    }).then((result) => {
      if (result.value) {
        this.pros.deleteUser(id).subscribe((user) => {
          console.log(user);
          const arrTemp = [...this.data];
          this.data = arrTemp.filter((item) => item.id !== user.id);
        });
      }
    });
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

  // ngOnInit(): void {
  //   if (localStorage.getItem('currentUser')) {
  //     this.userId = localStorage.getItem('currentUser');
  //   } else {
  //     this.userId = false;
  //   }
  // }
}
