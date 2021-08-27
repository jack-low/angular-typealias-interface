import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{ name }}!</h1>
    <button (click)="sendText()">send Title</button>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  @Output() title: EventEmitter<string> = new EventEmitter();
  sendText() {
    this.title.emit(this.name);
  }
}
