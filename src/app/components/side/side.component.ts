import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css'],
})
export class SideComponent implements OnInit {
  url: string = this.router.url;
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
