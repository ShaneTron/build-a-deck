$(document).ready(function() {
  var suits = ["spades", "hearts", "clubs", "diamonds"];
  var ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]

  var fullDeck = []

  suits.forEach(function(suit){
    ranks.forEach(function(rank){
    var deck = "<li>" + rank + " of " + suit + "</li>"
    fullDeck.push(deck)
   });
  });
  $("#result").append(fullDeck)
});
