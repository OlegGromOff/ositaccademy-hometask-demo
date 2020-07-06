import React from 'react';
import { render } from "react-dom";



export default class Task1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['Oleg', 'John', 'Tom', 'Bill', 'Brad'],
      defaultName: "Oleg",
    };

  }
  changeName = () => {
    this.namesValue = this.state.names[Math.floor(Math.random() * this.state.names.length)];
    this.setState({
      defaultName: this.namesValue
    });

  }
  render() {
    return (
      <div>
        <button onClick={this.changeName} >Select Name</button>
        <h1 >{this.state.defaultName}</h1>
      </div >
    )
  }
}

