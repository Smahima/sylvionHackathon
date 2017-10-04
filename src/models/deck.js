let SylvanDeck = {
  theCards: [{
      cardName: "tiny fountain",
      cardNumber: 3
      power: 1
    },
    {
      cardName: "small fountain",
      cardNumber: 3
      power: 2,
    },
    {
      cardName: "medium fountain",
      cardNumber: 3
      power: 3
    },
    {
      cardName: "large fountain",
      cardNumber: 3
      power: 4
    }
  ],
  cardTypes: 4,
  shuffleDeck: function() {
    let shuffledDeck = [];
    let currentDraw = this.theCards[Math.floor(Math.random() * this.cardTypes)];
    if (currentDraw.cardNumber !== 0) {
      aDeck.cardTotal--;
      currentDraw.cardNumber--;
      shuffledDeck.push(currentDraw.cardName);

    } else if (aDeck.cardTotal === 0) {

    } else {
      shuffleDeck();
    }

  },
  getCardTotal: function() {
    let cardSum = 0;
    this.theCards.forEach(cardtype => {
      cardSum += cardtype.cardNumber
    })
    return cardSum;
  }

};
