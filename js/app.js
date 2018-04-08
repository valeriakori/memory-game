//List that holds all cards

let cards = ["fas fa-bell", "fas fa-beer", "fas fa-book", " fas fa-bus", "fas fa-cloud", "fas fa-gamepad", "fas fa-futbol", "fas fa-lightbulb", "fas fa-bell", "fas fa-beer", "fas fa-book", " fas fa-bus", "fas fa-cloud", "fas fa-gamepad", "fas fa-futbol", "fas fa-lightbulb"];


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
Display the cards on the page
  - shuffle the list of cards using the 'shuffle' method
  - loop through each card and create its html
  - add each card's HTML to the page
*/

// Shuffle function
function shuffle(array) {
    // Creates a defined variable and 2 undefined variables
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;
    // While there are elements left on the array...
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);

      /* Math.floor will round down the number to the previous full integer. ex.. console.log(Math.floor(30.65)); -- returns 30.

      Math.random() -- returns a number between 0 and 1 but never 1

      Therefore,
      Math.floor(Math.random() * currentIndext);
      will round down the result from a random number (between 0 and 1) multiply by the current currentIndex value.
      */

      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
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
