export default function Player() {
    this.moves = [];
}

Player.prototype.move = function(position) { // gameboard does the error checking
    this.moves.push(position)
}

Player.prototype.checkWon = function(moves) {
    const dim = 3;

    // check across
    if(moves.includes(0) && moves.includes(1) && moves.includes(2)) return true
    if(moves.includes(3) && moves.includes(4) && moves.includes(5)) return true
    if(moves.includes(6) && moves.includes(7) && moves.includes(8)) return true

    // check down
    if(moves.includes(0) && moves.includes(3) && moves.includes(6)) return true
    if(moves.includes(1) && moves.includes(4) && moves.includes(7)) return true
    if(moves.includes(2) && moves.includes(5) && moves.includes(8)) return true
    
    // check diagonals
    if(moves.includes(0) && moves.includes(4) && moves.includes(8)) return true
    if(moves.includes(2) && moves.includes(4) && moves.includes(6)) return true
    
    return false;
}