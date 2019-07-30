import React from "react"
import Card from "./Card"
import "./css/CardContainer.css"
import cards from "./cards"

// let cardImage = () => Math.floor(Math.random() * cardArray.length)





class CardContainer extends React.Component {
  state = {
    cards
  }

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
                key={card.id} 
                card={card}
                shuffleCards={this.shuffleCards}
              />
        ))}
      </div>
    );
  }
}

export default CardContainer;
