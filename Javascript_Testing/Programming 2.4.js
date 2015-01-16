
	function square(row, column, buttonNumber){
		this.player = 0;
		this.row = row;
		this.column = column;
		this.buttonNumber = buttonNumber;
	}

var Tictactoe = {
	player1: "x",
	player2: "o",
}

var square1 = {
	onClick: function () {
		square1 == "x";
	}
}


document.getElementById("win").onclick = function() {chooseSquare()};

var chooseSquare = function() {
	document.getElementById("square1").innerHTML = "x";
	document.getElementById("square5").interHTML = "0";
	document.getElementById("square9").interHTML = "x";
};








Board.prototype.pickCell = function(cellID) {
	var buttonNumber = cellID[6];
	if (this.cells[buttonNumber - 1].state === 0) {
		this.cells[buttonNumber - 1].state = 1;
		document.getElementById(cellID).interHTML = "X";
	} else {
		alert("Please pick another cell");
	}
};

var board = new Board();
console.log(board.cells);
board.buildBoard(3);
console.log(board.cells.length);