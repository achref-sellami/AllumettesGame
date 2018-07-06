import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  allumette: number[] = [1, 2, 3]; //set matches to remove
  allumettesNumber: number = Math.floor(Math.random() * 25) + 15; //Initialize the random matches number 
  playerOneName: string = "Joueur 1"; //Initialize the first player name
  playerTwoName: string = "Joueur 2"; //Initialize the second player name

  playerOneDisable: boolean; //used to block the first player for playing
  playerTwoDisable: boolean; //used to block the second player for playing
  playerOneWin: boolean; //used to display if the first player won
  playerTwoWin: boolean; //used to display if the second player won
  allumettesItems: number[] = []; // Array of the matches number
  playerName: string; //Display the player name

  constructor(){}

  public ngOnInit(){
    this.playerOneWin = false;
    this.playerTwoWin = false;
    this.beginGame();
    this.createAllumettesItems(this.allumettesNumber);
  }

  /** This function returns the matches array */
  public createAllumettesItems(allumettesNumber: number): number[]{
    this.allumettesItems = [];
    for(var i = 1; i <= allumettesNumber; i++){
      this.allumettesItems.push(i);
    }
    return this.allumettesItems;
  }

  /** This function determinate who is the first player and initialize the game */
  public beginGame(): void {
    let begin: number = Math.floor(Math.random()*2);
    if(begin == 1){
      this.playerName = this.playerOneName;
      this.playerOneDisable = true;
      this.playerTwoDisable = false;
    }else {
      this.playerName = this.playerTwoName;
      this.playerOneDisable = false;
      this.playerTwoDisable = true;
    }
  }

  /** This function pulls the matches number that the player has choosed */
  public pullMatches(allumette: number): void {
    if(this.allumettesNumber - allumette < 0){
      this.allumettesNumber = 0;
    }else{
      this.allumettesNumber = this.allumettesNumber - allumette; // On retire le Nb d'allumettes
    }
    this.createAllumettesItems(this.allumettesNumber);
  }

  /** This function pulls the matches number choosed by the player one and determinate the winner */
  public playerOnePlay(allumette: number){
    this.pullMatches(allumette);
    // if the matches finished, the player one win
    if(this.allumettesNumber == 0){
      this.playerOneWin = true;
    }
    // else, the player two play
    if(this.allumettesNumber != 0){
      this.playerName = this.playerTwoName;
      this.playerOneDisable = false;
      this.playerTwoDisable = true;
    }; 
  }
  
  /** This function pulls the matches number choosed by the player two and determinate the winner */
  public playerTwoPlay(allumette: number){
    this.pullMatches(allumette);
    // if the matches finished, the player two win
    if(this.allumettesNumber == 0){
      this.playerTwoWin = true;
    }
    // else, the player one play
    if(this.allumettesNumber != 0){
      this.playerName = this.playerOneName;
      this.playerOneDisable = true;
      this.playerTwoDisable = false;
    }; 
  }

  /** This function begins another game */
  public refresh(): void {
    location.reload(true);
  }
}
