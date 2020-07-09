import React from 'react'
// import './style.css'

class Task7 extends React.Component {
  // constructor(props) {
  //   super(props);
  state = {
    data: [],
    img: {},
    defaultImg: null
    //   }
  };
  componentDidMount() {
    let url = 'https://picsum.photos/v2/list?limit=10';
    fetch(url)
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            data,
            img: data[0],
            defaultImg: 0
          })
        })
      .catch((error) => {
        this.setState({ error: true });
      })
  }

  nextPic = () => {
    this.setState((prevState) => ({
      img: this.state.data[prevState.defaultImg < prevState.data.length - 1 ? prevState.defaultImg + 1 : 0],
      defaultImg: prevState.defaultImg < prevState.data.length - 1 ? prevState.defaultImg + 1 : 0
    }))
  };
  prevPic = () => {
    this.setState((prevState) => ({
      img: this.state.data[prevState.defaultImg > 0 ? prevState.defaultImg - 1 : prevState.data.length - 1],
      defaultImg: prevState.defaultImg > 0 ? prevState.defaultImg - 1 : prevState.data.length - 1
    }))
  };

  render() {

    return (

      <div className="slider-wrapper">
        <div className="slider-inner">
          <button onClick={this.prevPic} className="prev-button">prev</button>
          <img src={this.state.img.download_url} alt={this.state.img.author} className="slider-img" />
          <hr />
          <h3>{this.state.img.author}</h3>
          <button onClick={this.nextPic} className="next-button">next</button>
        </div>
      </div >
    )
  }
}
export default Task7;

