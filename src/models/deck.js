let SylvanDeck = {
  theCards: [{
      cardName: "tiny fountain",
      cardNumber: 3,
      baseCardNumber: 3,
      power: 1
    },
    {
      cardName: "small fountain",
      cardNumber: 3,
      baseCardNumber: 3,
      power: 2,
    },
    {
      cardName: "medium fountain",
      cardNumber: 3,
      baseCardNumber: 3,
      power: 3
    },
    {
      cardName: "large fountain",
      cardNumber: 3,
      baseCardNumber: 3,
      power: 4
    }
  ],
  cardTypes: 4,
  shuffleDeck: function() {
    let shuffledDeck = [];
    while(this.getCardTotal() !== 0){
    let currentDraw = this.theCards[Math.floor(Math.random() * this.theCards.length)];
    if (currentDraw.cardNumber !== 0) {
      currentDraw.cardNumber--;
      shuffledDeck.push(currentDraw);
    } else {
      this.shuffleDeck();
    }
  }
  return shuffledDeck;
  },
  getCardTotal: function() {
    let cardSum = 0;
    this.theCards.forEach(cardtype => {
      cardSum += cardtype.cardNumber
    })
    return cardSum;
  },
  resetDeck: function() {
    this.theCards.forEach(cardtype => {
      cardtype.cardNumber = cardtype.baseCardNumber;
    })
  }

};

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
    } else {
      this.shuffleDeck();
    }
  }
  return shuffledDeck;
  },
  getCardTotal: function() {
    let cardSum = 0;
    this.theCards.forEach(cardtype => {
      cardSum += cardtype.cardNumber
    })
    return cardSum;
  },
  resetDeck: function() {
    this.theCards.forEach(cardtype => {
      cardtype.cardNumber = cardtype.baseCardNumber;
    })
  }
};
module.exports = {SylvanDeck, FireDeck};
