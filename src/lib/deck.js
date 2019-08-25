class DeckOfCards {
  constructor() {
    this.deck = this.createDeck();
    this.top = this.deck.length;
  }

  // using the data provided (suits and values) construct a deck of 52 cards
  createDeck() {
    const deck = [];
    [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'].forEach(v => {
      ['hearts', 'diamonds', 'clubs', 'spades'].forEach(suite => deck.push({v, suite}));
    });

    return deck;
  }

  shuffle() {
    this.top = this.deck.length;
  }

  * deal() {
    while (this.top--) {
      const pos = Math.floor(Math.random() * this.top);
      const pick = this.deck[pos];
    //   console.log('picking card at', pos, pick);
      // place picked to the end of the deck
      this.deck[pos] = this.deck[this.top];
      this.deck[this.top] = pick;

      yield pick;
    }
    return 'deck is empty';
  }

  empty() {
    return this.top < 0;
  }

  // Deal five cards, when you've hit the end of the deck and there are less than 5 to deal return a notification
  dealFive() {
    let n = 5;
    let val;
    const cards = [];
    const iter = this.deal();

    while (n--) {
      val = iter.next();
      if (val.done) {
        throw new Error('Empty Deck');
      }
      cards.push(val.value);
    }

    return cards;
  }
}

export default DeckOfCards;
