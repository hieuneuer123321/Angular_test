import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  emailInput: string = '';
  password: string = '';
  user: string = '';
  constructor(private fb: FormBuilder) {}
  infoUsers = this.fb.group({
    email: ['', Validators.required, Validators.email],
    password: [''],
  });
  get f() {
    return this.infoUsers.controls;
  }
  ngOnInit(): void {}
  submit() {
    console.log(this.infoUsers.value);
  }
}
