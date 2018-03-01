import React from "react";
import Hello from "./Hello";
import Clicker from "./Clicker";
import KittenGif from "./KittenGif";

function getDate(){
  const date = new Date();
  return date.toLocaleDateString('en-GB');
}

class App extends React.Component{
  render(){
    const question = "What's the date today?";
    return(
      <div>
        <h1 className="top-heading">This will be our awesome app</h1>
        <p>{question}</p>
        <p>{getDate()}</p>
        <Hello name="Alex"/>
        <Clicker />
        <KittenGif />
      </div>
    );
  }
}

export default App;
