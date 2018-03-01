import React from "react";

class Clicker extends React.Component{
  constructor(props){
    super(props);
    this.state = {counter: 0}
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    event.preventDefault();
    alert ("Button clicked");
    this.setState({
      counter: this.state.counter + 1
    })
    }

  render(){
    return (
      <div>
        <div>This button has been clicked {this.state.counter} times.</div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}

export default Clicker;
