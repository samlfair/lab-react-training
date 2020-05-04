// Create a Greetings component with 2 props:

// lang: A string that could be ,"de","en","es","fr"
// children: A text

import React, { Component } from "react";
// import "./../Greeting.css";

function switchGreeting(param) {
  switch (param) {
    case "en":
      return "Hello ";
    case "de":
      return "Guten Tag ";
    case "es":
      return "Hola ";
    case "fr":
      return "Salut ";
  }
}

class Greeting extends Component {
  render() {
    console.log(this);
    return (
      <div className="greeting">
        {switchGreeting(this.props.lang)}
        {this.props.children}
      </div>
    );
  }
}

export default Greeting;
