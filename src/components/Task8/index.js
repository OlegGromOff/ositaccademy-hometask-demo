import React from 'react';
import Header from '../Task8Header';
import Jumbotron from '../Task8Jumbotron';
import BookmarksResult from '../Task8Bookmark/';


export default class Task8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  render() {
    return (
      <body onLoad="fetchBookmarks()">
        <div className="container">
          <Header />
          <Jumbotron />
          <BookmarksResult />



          <footer className="footer">
            <p>&copy; 2019 Bookmarker, Inc. | Developed by Rotimi Best</p>
          </footer>
        </div>

        <script
          src="http://code.jquery.com/jquery-3.3.1.js"
          integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
          crossorigin="anonymous"></script>

      </body>

    )
  }
}