//List that holds all cards

let cards = ["fas fa-bell", "fas fa-beer", "fas fa-book", " fas fa-bus", "fas fa-cloud", "fas fa-gamepad", "fas fa-futbol", "fas fa-lightbulb", "fas fa-bell", "fas fa-beer", "fas fa-book", " fas fa-bus", "fas fa-cloud", "fas fa-gamepad", "fas fa-futbol", "fas fa-lightbulb"];


// Shuffle the cards
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(cards);

/* Display cards on the page,
  loop through each card and create its html,
  add each card's html to the page
*/
let deck = document.querySelector('.deck');
for (let card of cards) {
  let cardContainer = document.createElement('li');
  cardContainer.setAttribute("class", "card");
  let cardContent = document.createElement('span');
  cardContent.setAttribute("class", `${card} show`)
  cardContainer.appendChild(cardContent);
  deck.appendChild(cardContainer);
}




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
