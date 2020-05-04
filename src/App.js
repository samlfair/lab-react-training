import React, { Component } from "react";
import IdCard from "./components/IdCard.jsx";
import Greeting from "./components/Greeting.jsx";
import image from "./images/headshot.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard
          lastName="Littlefair"
          firstName="Sam"
          gender="Male"
          height={184}
          birth={new Date("1990-08-08").toDateString()}
          picture={image}
        />
        <h1>Greetings</h1>
        <Greeting lang="en">Sam</Greeting>
        <Greeting lang="de">Ludwig</Greeting>
      </div>
    );
  }
}

export default App;
