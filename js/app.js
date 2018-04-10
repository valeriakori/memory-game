//List that holds all cards

let cards = ["fa-bell", "fa-beer", "fa-book", "fa-bus", "fa-cloud", "fa-gamepad", "fa-futbol", "fa-lightbulb", "fa-bell", "fa-beer", "fa-book", "fa-bus", "fa-cloud", "fa-gamepad", "fa-futbol", "fa-lightbulb"];

// Shuffle the cards
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function cardRotation(element) {
  element.classList.toggle('match');
}
shuffleArray(cards);

let deck = document.querySelector('.deck');

for (let i = 0; i < cards.length; i++) {
  const cardContainer = document.createElement('li');
  const cardContent = document.createElement('span');

  cardContainer.classList.add('card');
  cardContent.classList.add('fas');
  cardContent.classList.add(cards[i]);

  cardContainer.appendChild(cardContent);
  deck.appendChild(cardContainer);

  cardContainer.addEventListener('click', function() {
    cardRotation(cardContainer);
  });
};



/*
Setup the event listener for a card. If a card is clicked:
  - Display the card's symbol
  (put this funtionaly in another function that is called from this one)

  - add the card to a *list* of "open" cards
  (put this funtionaly in another function that is called from this one)

  - if the list already has another card, check to see if the two cards match.

    + if the cards do match, lock the cards in the open position
    (put this funtionaly in another function that is called from this one)

    + if the cards do not match, remove the cards from the list and hide the card's symbol
    (put this funtionaly in another function that is called from this one)

    + increment the move counter and display on the page
    (put this funtionaly in another function that is called from this one)

    + if all cards have match, display a message with the final score
    (put this funtionaly in another function that is called from this one)
*/
