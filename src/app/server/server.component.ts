import { Component, OnInit } from '@angular/core';

@Component({
  // selector: [.app-server] // class style
  // selector: [app-server] // attribute style

  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css'],
  styles:[`
        .online {
          color:white
        }
  `
  ]
})
export class ServerComponent implements OnInit {
  serverID = 10;
  serverStatus= 'offline'
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }

  ngOnInit(): void {
  }
  getColor(){
     return this.serverStatus === 'offline' ? 'red' : 'green';
  }
}
