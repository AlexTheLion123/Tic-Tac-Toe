import Player from '$lib/Player'

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
    // if(this.lastPlayer == player) {
    //     throw "Its not your turn"
    // }
    if(this.counter%2==0) {
        this.Player1.move(position);
        this.board[position] = "X";
        
        const isWon = this.Player1.checkWon();
        if(isWon==true){
            alert("Player1 has won the game");
            this.reset()
        }
    
    } else {
        this.Player2.move(position);
        this.board[position] = "O"
        
        const isWon = this.Player2.checkWon();
        if(isWon==true){
            alert("Player2 has won the game");
            this.reset()
        }
    }
    this.counter++;
    
    console.log(this.board);
}

Gameboard.prototype.checkWon = function(){
    if(this.counter<5){
        return false;
    }

    const isWon = this.counter%2==0 ? this.Player1.checkWon() : this.Player2.checkWon()
    if(isWon==true){
        return true
    } else {
        return false
    }
}

Gameboard.prototype.reset = function() {
    this.board = this.board = Array(9).join(".").split(".");
}
