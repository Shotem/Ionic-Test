import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor() {  }

  darkMode: boolean = false;
  status: boolean;

  
  
  onChange(): void {
    this.darkMode = this.status;
    console.log("Dark Mode:", this.darkMode);
  }  

}

class Point{
  x: number;
  y: number;

  public constructor(x: number, y: number){
    this.x = x;
    this.y = y;
  }
}