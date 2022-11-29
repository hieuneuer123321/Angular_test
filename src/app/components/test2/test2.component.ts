import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
})
export class Test2Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  click() {
    // if (localStorage.getItem('currentUser')) {
    //   localStorage.removeItem('currentUser');
    // }
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
      confirmButtonText: `Logout`,
    }).then((result) => {
      if (result.value) {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
      }
    });
  }
}
