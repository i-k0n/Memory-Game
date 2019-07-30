import React from "react";
import Card from "./components/Card"
import cards from "./components/cards.json"
import "./App.css"

class App extends React.Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log("New Highscore: ", this.state.highscore);
      });
    }
    // reset card count
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    // replace with modal
    console.log("Game Over. Your score: ", this.state.score);
    this.setState({ score: 0 });
    return true;
  }

  cardClick = id => {
    this.state.cards.find((e, i) => {
      // if the clicked element's id 
      if (e.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1}, function() {
            console.log(this.state.score)
          });
          this.shuffleCards(this.state.cards);
          return true;
        } else {
          this.gameOver();
        }
      };
      // return this.state.cards;
    });
  };

  shuffleCards = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  render() {
    return (
      <div className="card-container">
        {this.state.cards.map(card => (
              <Card 
                cardClick={this.cardClick}
                key={card.id}
                id={card.id}
                image={card.image}
              />
        ))}
      </div>
    );
  }
}

export default App;