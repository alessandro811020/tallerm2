import { Component } from '@angular/core';
import {ChatService} from '../app/providers/chat.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

  constructor(public _cs:ChatService){
    console.log('Se abre el appcomponent');
    console.log(_cs);
    
  }

  title = 'taller';
  
}
