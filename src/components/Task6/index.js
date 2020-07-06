import React from 'react'
// import './style.css'


class Task6 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  };
  componentDidMount() {
    fetch('https://github.com/kkmkkkkk')
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            user: data,
            loading: false
          })
        }
      )
  }

  render() {

    return (
      <div>
        {this.state.user.map((userItem) => {
          return (
            <div className="user-item">
              <p><b>Id:</b> {userItem.id}</p>
              <p><b>Title:</b> {userItem.title}</p>
              <p><b>Body:</b> {userItem.body}</p>
            </div>
          )
        })}
      </div>
    )

  }

}
export default Task6;