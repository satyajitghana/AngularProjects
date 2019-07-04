import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-secret-password',
  templateUrl: './secret-password.component.html',
  styleUrls: ['./secret-password.component.css']
})
export class SecretPasswordComponent implements OnInit {

  canShow: boolean = false;
  logEvents = [];

  constructor() {
  }

  ngOnInit() {
  }

  logEvent($event: MouseEvent) {
    this.logEvents.push(Date());
  }
}
