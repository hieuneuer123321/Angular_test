import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import Swal from 'sweetalert2';
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css'],
})
export class SideComponent implements OnInit, OnChanges {
  @Input() userLogin: any;
  userLoginAuth: any;
  auth = '';
  url: string = this.router.url;
  constructor(private router: Router) {}
  logout() {
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
  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.userLoginAuth = JSON.parse(
        localStorage.getItem('currentUser') || '{}'
      );
      this.auth = this.userLoginAuth.auth.toString();
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
