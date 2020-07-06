import React from 'react'

class Task4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      min: this.props.min,
      max: this.props.max
    }
  };


  randNumber = () => {
    const { max, min } = this.state;
    this.setState({
      number: Math.floor(Math.random() * (max - min + 1) + min)
    })
  };


  render() {
    return (
      <div>
        <button onClick={this.randNumber}>Change number</button>
        <p>{this.state.number}</p>
      </div >
    )
  };
}

export default Task4