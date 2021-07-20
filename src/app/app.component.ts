import {
  Component,
  OnInit,
  Input,
  OnChanges, SimpleChange, Output
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  serverElements = [{type:'server', name:'Testserver', content:'Just a test'}];


  onIntervalFired(firedNUmber:number){
    if(firedNUmber % 2 === 0){
      this.evenNumbers.push(firedNUmber)
    }else{
      this.oddNumbers.push(firedNUmber)
    }
    console.log(firedNUmber);

  }

  onServerAdded(serverData:{serverName:string;serverContent:string}){
    this.serverElements.push(
      {
        type:'server',
        name: serverData.serverName,
        content: serverData.serverContent
      }
    );
  }

  onBlueprintAdded(blueprintData:{blueprintName:string;blueprintContent:string }){
    this.serverElements.push(
      {
        type:'blueprint',
        name: blueprintData.blueprintName,
        content: blueprintData.blueprintContent
      }
    );
  }

  onChangeName(){
    this.serverElements[0].name ="Changed"
  }
  onDestroyFirstComponent(){
    this.serverElements.splice(0,1)
  }


}

