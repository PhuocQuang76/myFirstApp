import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'default';
  serverCreated = false;
  servers = ['test', 'test 2'];

  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 500)
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = this.serverName + " was created"
    this.servers.push(this.serverName)
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;

  }
}
