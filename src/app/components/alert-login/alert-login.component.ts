import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../../services/alert.service';
@Component({
  selector: 'app-alert-login',
  templateUrl: './alert-login.component.html',
  styleUrls: ['./alert-login.component.css'],
})
export class AlertLoginComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  message: any;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    // this.subscription = this.alertService.getAlert().subscribe((message) => {
    //   switch (message && message.type) {
    //     case 'success':
    //       message.cssClass = 'alert alert-success';
    //       break;
    //     case 'error':
    //       message.cssClass = 'alert alert-danger';
    //       break;
    //   }
    //   this.message = message;
    // });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
