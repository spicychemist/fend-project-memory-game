/*
 * Create a list that holds all of your cards
 */
 function createList() {
   var list = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb"];
   var finalarray = [];
   for (var i = 0; i < 2 ; i++){
     for (var y = 0; y < list.length; y++){
       finalarray[finalarray.length]= list[y]
     }
   }
 return (finalarray);
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
 var cardsList= createList();
 console.log(cardsList);

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


cardsList = shuffle(cardsList);
console.log(cardsList);

var cardElements= document.getElementsByClassName('card');
for (var i=0; i<cardElements.length; i++){
  //document.querySelector('.card').innerHTML
  cardElements[i].removeChild(cardElements[i].firstElementChild);
  var icon= document.createElement('i');
  icon.classList.add('fa');
  icon.classList.add(cardsList[i]);
  cardElements[i].appendChild(icon);
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

/*select cards*/
var cards= document.getElementsByClassName('card');
var openCards = [];

/*function to toggle card - show/hide */
function displayCard(card){
  card.classList.toggle('show');
  card.classList.toggle('open');
};

/*function to check for match*/
function matchCard(card){
  if(openCards.length < 2) {
    return}
  if (openCards[0].firstElementChild.classList[1] === openCards[1].firstElementChild.classList[1]){
   openCards[0].classList.add('match');
   openCards[1].classList.add('match');
   openCards = [];
 }
 else {
   setTimeout(function(){
     alert('No match - try again');
     console.log('no match');
     openCards[0].classList.remove('open', 'show');
     openCards[1].classList.remove('open', 'show');
     openCards = [];
   }, 100)
 }
};

/*Listen for click, toggle class*/
for (i= 0; i< cards.length; i++){
  cards[i].addEventListener('click', function(){
    displayCard(this);
    openCards.push(this);
    console.log(openCards);
    matchCard(this);
  })
};
