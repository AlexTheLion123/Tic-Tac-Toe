import Player from '$lib/Player';
// import { board } from '$lib/stores'

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
        // board.update(arr => arr[i]="X")

        if(this.Player1.checkWon(this.Player1.moves)){
            alert("Player1 has won the game");
            this.reset()
            isWon = true;
        }
        
    } else {
        this.Player2.move(position);
        this.board[position] = "O"
        
        if(this.Player2.checkWon(this.Player2.moves)){
            alert("Player2 has won the game");
            this.reset()
            isWon = true
        }
    }
    if(!isWon) this.counter++;
}

Gameboard.prototype.checkWon = function(){
    if(this.counter<5){
        return false;
    }

    const isWon = this.counter%2==0 ? this.Player1.checkWon(this.board) : this.Player2.checkWon(this.board)
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
