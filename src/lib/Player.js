export default function Player() {
    this.moves = [];
}

Player.prototype.move = function(position) { // gameboard does the error checking
    this.moves.push(position)
}

Player.prototype.checkWon = function() {
    for(let i=0; i<=6; i++){
        // checking across
        if (this.moves.includes(i+1) && this.moves.includes(i+2)){
            return true
        }
        //checking down
        if(this.moves.includes(i+3) && this.moves.includes(i+6)){
            return true
        }
        //checking diagonal
        if(this.moves.includes(i+4) && this.moves.includes(i+8)){
            return true
        }
        return false
    }
}