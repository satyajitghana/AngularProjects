import {Component, OnInit} from '@angular/core';

@Component({
  // selector: '[app-servers]', // you can always make it a HTML attribute instead of a HTML element
  // Now Angular will select the component by attribute
  // so you'll have to use <div app-servers>
  // selector: '.app-servers', // Now this is a class name
  // Note: For components always use the HTML element style
  // templateUrl: './servers.component.html',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //     `
  //   <app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'InitialServerName';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }

}
