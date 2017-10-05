import React from 'react';


let FireDeck = {
  theCards: [{
      cardName: "tiny fire",
      cardNumber: 3,
      baseCardNumber: 3,
      power: 0
    },
    {
      cardName: "small fire",
      cardNumber: 3,
      baseCardNumber: 3,
      power: 1,
    },
    {
      cardName: "medium fire",
      cardNumber: 3,
      baseCardNumber: 3,
      power: 2
    },
    {
      cardName: "large fire",
      cardNumber: 3,
      baseCardNumber: 3,
      power: 3
    }
  ],
  shuffleDeck: function() {
    let shuffledDeck = [];
    while(this.getCardTotal() !== 0){
    let currentDraw = this.theCards[Math.floor(Math.random() * this.theCards.length)];
    if (currentDraw.cardNumber !== 0) {
      currentDraw.cardNumber--;
      shuffledDeck.push(currentDraw);
    }
  }
  return shuffledDeck;
  },
  getCardTotal: function() {
    let cardSum = 0;
    this.theCards.forEach(cardtype => {
      cardSum += cardtype.cardNumber
    })
    console.log(cardSum);
    return cardSum;
  },
  resetDeck: function() {
    this.theCards.forEach(cardtype => {
      cardtype.cardNumber = cardtype.baseCardNumber;
    })
  }
};

export default FireDeck;
