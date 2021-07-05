import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  servers = [];
  display = false;
  log = [];

  onToggleDisplay(){
    this.display = ! this.display
    if(!this.display){
      // @ts-ignore
      this.log.push(new Date());
    }

  }

  onAddServer(){
    // @ts-ignore
    this.servers.push('phuoc');
  }


  onRemoveServer(i: number){

    this.servers.splice(i,1);
  }



}
