import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  allumette: number[] = [1, 2, 3];
  allumettesNumber: number = Math.floor(Math.random() * 10) + 15;
  allumettesItems: number[] = [];

  constructor(){}

  public ngOnInit(){
    this.createAllumettesItems();
  }

  createAllumettesItems(){
    for(var i = 1; i <= this.allumettesNumber; i++){
      this.allumettesItems.push(i);
    }
    return this.allumettesItems;
  }
  
}
