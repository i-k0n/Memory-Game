import React from "react";
import "../styles/Header.css";
import "./css/Card.css"

// By importing the Header.css file, it is added to the DOM whenever this component loads
const cardClick = () => {
  !this.state.value 
    ? this.setstate({ value: true })
    : this.setstate({ value: false })
  console.log(`clicked, state set to: ${this.state.value}`)
}

const Card = props => (
  // console.log(props)
  // return (
    <div 
      className="card" 
      id={props.card.id}
      onClick={() => {
        console.log(props.card.id)
        cardClick(props.card.id);
      }}
      >
      <img className="card-image" src={props.card.image} alt="tile"/>
    </div>
  // );
);



export default Card;
