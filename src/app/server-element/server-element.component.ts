import {
  Component,
  OnInit,
  Input,
  SimpleChange,
  DoCheck,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit, ContentChild,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // @ts-ignore
  // @Input('srvElement') element: { type: string; name: string; content: string; }
  @Input('srvElement') name:string;
  // @ts-ignore
  @ViewChild('heading') header:ElementRef;
  // @ts-ignore
  @ContentChild('contentParagraph') paragraph:ElementRef;

  constructor() {
    console.log("constructor log")
  }
  ngOnChanges(changes:SimpleChange){
    console.log("ngOnchanges log");
    console.log(changes)

  }
  ngOnInit(): void {
    console.log("ngOninit log")
    // @ts-ignore
    // console.log('Text content' + this.header.nativeElement.textContent)
    // console.log("Content Init" + this.paragraph.nativeElement.textContent)
  }

  ngDoCheck(){
    console.log("do check")
  }

  ngOnDestroy(){
    console.log("destroy log")
  }

  ngAfterViewInit(){
    console.log('Text content' + this.header.nativeElement.textContent);
  }
  ngAfterContentInit(){
    console.log("Content Init" + this.paragraph.nativeElement.textContent)
  }

}
