import React from "react"
import Header from "./components/Header"
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
    // if current score is greater than highscore, update high score
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log("New Highscore: ", this.state.highscore);
      });
    }
    // reset card counter
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    // replace with modal
    this.state.score === cards.length ? alert(`You Win with a score of ${this.state.score}!`) : alert(`You lost. Your score was ${this.state.score}. Please try again.`)
    // console.log("Game Over. Your score: ", this.state.score);
    // reset state for score
    this.setState({ score: 0 });
    // shuffle cards for new game
    this.shuffleCards(this.state.cards);
    return true;
  }

  cardClick = id => {
    // eslint-disable-next-line
    this.state.cards.find((e, i) => {
      // if the clicked element's id matches an id for a card
      if (e.id === id) {
        // if the clicked card's counter is zero
        if (cards[i].count === 0) {
          // set clicked card as counted
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1}, function() {
            console.log(this.state.score)
            this.correctText()
            if (this.state.score === cards.length) {
              // console.log("You win!")
              this.gameOver();
            }
          });
          // shuffle cards after a guess
          this.shuffleCards(this.state.cards);
          return true;
          // else, we've clicked it before, and it's a game over
        } else {
          this.gameOver();
        }
      };
    });
  };

  // randomizer
  shuffleCards = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // tell the user they clicked correctly
  correctText = () => {
    const div = document.getElementById("win-lose");
    div.style.opacity = 1;
    setTimeout(function() {
      div.style.opacity = 0;
    }, 750)
  }

  render() {
    return (
      <div className="wrapper">
        <Header score={this.state.score} highscore={this.state.highscore}/>
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
        <div className="instructions">Click an image to begin. Try not to click the same image twice!</div>
      </div>
    );
  }
}

export default App;