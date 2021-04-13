import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numero: number;
  escolher (){
  this.numero = Math.floor(Math.random() * 100) + 1;
  }
}
