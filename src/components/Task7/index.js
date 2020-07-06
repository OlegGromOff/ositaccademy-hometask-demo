import React from 'react'
// import './style.css'

class Task7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      defaultImg: '0'
    }
  };
  componentDidMount() {
    let url = 'https://picsum.photos/id/0/200/300';
    fetch(url)
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            img: data,
            defaultImg: data.id
          })
        }
      )
  }

  render() {

    return (

      <div>
        < div >
          <img src={this.state.defaultImg.download_url} alt='random-img'></img>
          {this.state.defaultImg}
        </div>


      </div >
    )
  }
}
export default Task7;

