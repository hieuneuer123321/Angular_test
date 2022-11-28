import { Component, OnInit } from '@angular/core';
// import {
//   FormGroup,
//   FormControl,
//   Validators,
//   FormBuilder,
// } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/modules/user';
// import { AlertService, AuthenticationService } from '../_services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // emailInput: string = '';
  // password: string = '';
  // user: string = '';
  // constructor(private fb: FormBuilder) {}
  // infoUsers = this.fb.group({
  //   emailInput: ['', [Validators.required, Validators.email]],
  //   password: [
  //     '',
  //     [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
  //   ],
  // });
  // get f() {
  //   return this.infoUsers.controls;
  // }
  // validateAllFormFields(formGroup: FormGroup) {
  //   //{1}
  //   Object.keys(formGroup.controls).forEach((field) => {
  //     //{2}
  //     const control = formGroup.get(field); //{3}
  //     if (control instanceof FormControl) {
  //       //{4}
  //       control.markAsTouched({ onlySelf: true });
  //     } else if (control instanceof FormGroup) {
  //       //{5}
  //       this.validateAllFormFields(control); //{6}
  //     }
  //   });
  // }
  // ngOnInit(): void {}
  // submit() {
  //   if (this.infoUsers.valid) {
  //     alert(this.infoUsers.value.emailInput);
  //   } else {
  //     this.validateAllFormFields(this.infoUsers);
  //   }
  // }
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string = '';
  Myuser: any;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, // private authenticationService: AuthenticationService, // private alertService: AlertService
    private pros: UserService
  ) {
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
    // this.router.navigate(['/']);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.maxLength(8), Validators.minLength(4)],
      ],
    });

    //get return url from router
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // reset alerts on submitted
    // this.alertService.clear();
    //stop if form invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      this.pros
        .login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe((data) => {
          this.Myuser = data.find((user) => {
            console.log(user);
            console.log(this.loginForm.value.username);
            return (
              user.username === this.loginForm.value.username &&
              user.password === this.loginForm.value.password
            );
          });
          if (this.Myuser) {
            console.log(this.Myuser);
            this.router.navigate(['/home']);
          } else {
            alert('sai user');
          }
        });
    }
    // this.loading = true;

    // this.authenticationService
    //   .login(this.f.username.value, this.f.password.value)
    //   .pipe(first())
    //   .subscribe(
    //     (data) => {
    //       this.router.navigate([this.returnUrl]);
    //     },
    //     (error) => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     }
    //   );
  }
}
