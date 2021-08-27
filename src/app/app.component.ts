import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  title = 'Get Title Name.';
  logMessage(t: string) {
    this.title = t === this.title ? 'Get Title' : String(t);
  }
}
