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

  cardClick = id => {
    console.log("cardClick.id: ", id);
    this.state.cards.find((e, i) => {
      // if the clicked element's id 
      if (e.id === id) {
        console.log("cards[i]: ", cards[i]);
        console.log("cards[i].count: ", cards[i].count);
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1}, function() {
            console.log("score: ", this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          // this.gameOver();
        }
      };
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