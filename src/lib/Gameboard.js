import Player from '$lib/Player';

// Gameboard object
export default function Gameboard() {
    this.board = Array(9).join(".").split(".");
    this.counter = 0;

    this.Player1 = new Player();
    this.Player2 = new Player();   
    
}

Gameboard.prototype.move = function(position) {
    if(this.board[position]) {
        throw "Someone has already moved there"
    }
    let isWon = false;
    if(this.counter%2==0) {
        this.Player1.move(position);
        this.board[position] = "X";
    } else {
        this.Player2.move(position);
        this.board[position] = "O"
        
    }
    this.counter++;
}

Gameboard.prototype.checkWon = function(){
    if(this.counter<5){
        return false;
    }
    const isWon = this.counter%2==1 ? this.Player1.checkWon(this.Player1.moves) : this.Player2.checkWon(this.Player2.moves)
    if(isWon==true){
        return true
    } else {
        return false
    }
}

Gameboard.prototype.reset = function() {
    this.board = Array(9).join(".").split(".");
    this.counter = 0;
    this.Player1 = new Player();
    this.Player2 = new Player(); 
}
