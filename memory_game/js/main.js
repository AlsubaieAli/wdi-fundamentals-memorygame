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

function flipCard() {
    var cardId = this.getAttribute('data-id');
    selectedCard = cards[cardId];
	cardsInPlay.push(selectedCard.rank);
    console.log("User flipped " + selectedCard.rank);
    console.log(selectedCard.cardImage);
    console.log(selectedCard.suit)
    this.setAttribute('src', selectedCard.cardImage);
	checkForMatch();
}

function createBoard(){
    for (let i = 0; i < cards.length; i++) {
        const aCard = cards[i];
        var element = document.createElement('img');
        element.setAttribute('src', 'images/back.png');
        element.setAttribute('data-id', i);
        element.addEventListener('click', flipCard);
        document.querySelector('#game-board').appendChild(element);
    }
}

createBoard();