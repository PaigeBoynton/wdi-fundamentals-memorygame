console.log("up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

var flipCard = function(cardID) {
	card = cards[cardID];
	console.log("User flipped " + cards[cardID])
	cardsInPlay.push(cards[cardID]);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

};

flipCard(0);
flipCard(1);
