import React from 'react'
import './style.css'

class Task5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true
    }
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
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
        {this.state.loading ? <p>...Loading</p> :
          this.state.user.map((userItem) => {
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
export default Task5;