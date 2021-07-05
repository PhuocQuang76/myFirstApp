import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
   //templateUrl: c./warning-alert.component.html',
   template: `
   <p> This is a warning, you are in danger! </p>`,
  // styleUrls: ['./warning-alert.component.css']
  styles: [
    `
    p {
      padding:20px;
      background-color: red;
      border: 3px solid darkred;

    }
    `
  ]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
