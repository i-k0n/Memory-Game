import React from "react";
import CardContainer from "./components/CardContainer";
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
          <CardContainer />
      </div>
    )
  }
}

export default App;