import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-event-binding-exercise';
  buttonLog(){
    console.log("Did THis Print to Log")
  }
}
