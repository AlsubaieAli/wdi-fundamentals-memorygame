var cards = [
		{
			rank: "queen",
			suit: "hearts",
			cardImage: "images/queen-of-hearts.png"
		},
		{
			rank: "queen",
			suit: "diamonds",
			cardImage: "images/queen-of-diamonds.png"
		},
		{
			rank: "king",
			suit: "hearts",
			cardImage: "images/king-of-hearts.png"
		},
		{
			rank: "king",
			suit: "diamonds",
			cardImage: "images/king-of-diamonds.png"
		}
	],
	cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
}

function flipCard(cardID) {
	var card = cards[cardID];
	cardsInPlay.push(card.rank);
    console.log("User flipped " + card.rank);
    console.log(card.cardImage);
    console.log(card.suit)
	checkForMatch();
}

flipCard(0);
flipCard(2);
