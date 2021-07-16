import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string; serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{blueprintName:string;blueprintContent:string }>();
  // newServerName ='';
  // @ts-ignore
  @ViewChild('serverContentInput') serverContentInput:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(newName:HTMLInputElement){
    this.serverCreated.emit({
      // serverName:this.newServerName,
      serverName:newName.value,
      // serverContent:this.newServerContent
      serverContent:this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(newName:HTMLInputElement){
    console.log(this.serverContentInput)
    this.blueprintCreated.emit({
      blueprintName:newName.value,
      // blueprintContent:this.newServerContent
      blueprintContent:this.serverContentInput.nativeElement.value
    });
  }
}
