document.addEventListener('DOMContentLoaded', () => {
  // Define the Card class
  class Card {
    constructor(rank, suit) {
      this.rank = rank;
      this.suit = suit;
      this.img_source = `./images/${this.toString()}.png`;
    }
    toString() {
      return `${this.rank}${this.suit}`;
    }
  }
  // Define the Deck class
  class Deck {
    constructor() {
      this.cards = [];
      this.ranks = ['6', '7', '8', '9', '10', '11', '12', '13', '14'];
      this.suits = ['xar', 'sirt', 'qyap', 'xach'];
      this.buildDeck();
      this.shuffle();
    }

    buildDeck() {
      for (const suit of this.suits) {
        for (const rank of this.ranks) {
          this.cards.push(new Card(rank, suit));

        }
      }
    }

    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
    dealHand(numCards) {
      return this.cards.splice(0, numCards);
    }
  }
  class User {
    static usersCount = 0;
    move;
    constructor(allcards) {
      this.board = document.createElement('div');
      document.body.appendChild(this.board);
      if (User.usersCount === 0) {
        this.board.id = 'board1';
      } else {
        this.board.id = 'board2';
      }
      this.cards = allcards.dealHand(6);
      this.cards_count = this.cards.length;
      this.cards_divs = [];
      for (let i = 0; i < this.cards_count; i++) {
        this.cards_divs[i] = document.createElement('div');
        this.cards_divs[i].id = `card_${i}`;
        this.cards_divs[i].className = 'card';
        this.board.appendChild(this.cards_divs[i]);
        this.cards_divs[i].style.backgroundImage = `url(${this.cards[i].img_source})`;
        this.cards_divs[i].style.backgroundSize="106%";
      }
      User.usersCount += 1;
    }

    /*  Find Trump (Козырь) */
    findMinTrump(trump) {
      let min=-1;
      for (const card of this.cards) {
        if (card.suit === trump) {
          min = card;
          break;
        }
      }
      if (min !== -1) {
        for (const card of this.cards) {
          if (card.suit === trump && (Number(card.rank) < Number(min.rank))) {
            min = card;
          }
          else {
            continue;
          }
        }
        return min;
      }
      else {
        return false;
      }
    }

  }
  class Game {
    constructor() {
      this.allcards = new Deck();
      this.user1 = new User(this.allcards);
      this.user2 = new User(this.allcards);
      document.getElementById('board2').style.visibility = "visible";
      //get random trump for game
      this.trump = this.getRandomTrumpCard()[0];
      debugger
      this.setMoves();
    }
    setMoves(){
      let x = this.user1.findMinTrump(this.trump.suit);
      let y = this.user2.findMinTrump(this.trump.suit);
      if (x !== false || y !== false) {
        if (x !== false && y !== false) {
          if (Number(x.rank) < Number(y.rank)) {
            this.user1.move = true;
            this.user2.move = false;
          }
          if (Number(y.rank) < Number(x.rank)) {
            this.user1.move = false;
            this.user2.move = true;
          }
        }
        if (x !== false && y === false) {
          this.user1.move = true;
          this.user2.move = false;
        }
        if (x === false && y !== false) {
          this.user1.move = false;
          this.user2.move = true;
        }
      } else {
        this.user1.move = Math.random() >= 0.5;
        this.user2.move = !this.user1.move;
      }
    }
    getRandomTrumpCard() {
      let index=Math.floor(Math.random() * (23+1))
      return this.allcards.cards.splice(index, 1);
    }

  }
  const start = new Game();
  console.log(start.allcards);
})


