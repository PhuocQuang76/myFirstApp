import {
  Component, EventEmitter,
  OnInit,
  Output
} from '@angular/core';

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  lastNumber = 0;
  myInterval: any;
  @Output() intervalFired = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.myInterval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1)
      this.lastNumber ++;
    },1000);




  }

  onStopGame(){
    this.lastNumber = 1;
    clearInterval(this.myInterval);

  }

}
