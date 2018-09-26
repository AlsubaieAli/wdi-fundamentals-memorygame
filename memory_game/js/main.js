var cards = ['queen', 'queen', 'king', 'king'],
    cardsInPlay = [];

function checkForMatch(){

    if(cardsInPlay.length === 2){
        if(cardsInPlay[0] === cardsInPlay[1]){
            alert('You found a match!');
        }else{
            alert('Sorry, try again.');
        }
    }
}

function flipCard(cardID){
    var card = cards[cardID];
    cardsInPlay.push(card);
    console.log("User flipped " + card);
    checkForMatch();
}

flipCard(0);
flipCard(2);