import React from 'react';
import Header from './Header';
import BookmarksResult from './Bookmark';


export default class Task8 extends React.Component {
  state = {
    name: '',
    url: '',
    emptyForm: false,
    invalidUrl: false,
    bookmarks: []
  };

  componentDidMount() {
    this.getLocaleStorageData()
  }


  getLocaleStorageData = () => {
    this.setState({
      bookmarks: JSON.parse(localStorage.getItem('bookmarks'))
    });
  };


  onSubmit = (e) => {
    e.preventDefault();

    const { name, url } = this.state;


    if (this.validateForm(name, url)) {
      const bookmark = {
        name,
        url,
      };
      if (localStorage.getItem('bookmarks') === null) {
        let bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      } else {
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      }
      this.setState({
        name: '',
        url: ''
      });

    }
    this.getLocaleStorageData()
  };


  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  validateForm = (name, url) => {
    if (!name || !url) {
      this.setState({
        emptyForm: true
      });
      alert('The form is incomplete');
      return false;
    }

    const regex = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);

    if (!url.match(regex)) {
      this.setState({
        invalidUrl: true
      });
      alert('Please enter right url');
      return false;
    }

    return true;
  };
  removeBookmark = (url) => {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    let newBookmarks = bookmarks.filter(
      (bookmarkObj) => bookmarkObj.url !== url
    );
    this.setState({
      bookmarks: newBookmarks,
    });
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
    this.getLocaleStorageData();
  };


  render() {
    const { name, url, bookmarks } = this.state;

    return (
      <div>
        <Header />
        <div className="jumbotron">
          <h2>Bookmark your favorite Sites</h2>

          <form id="myForm" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label for="">Site Name</label>
              <input type="text"
                className="form-control"
                name="name"
                placeholder="Website Name"
                value={name}
                onChange={this.onChange} />
            </div>

            <div className="form-group">
              <label for="">Site URL</label>
              <input type="text"
                className="form-control"
                name="url"
                placeholder="Website URL"
                value={url}
                onChange={this.onChange} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

        <div className="row marketing">
          <div className="col-lg-12">
            <div id="bookmarksResult">
              <BookmarksResult bookmarks={this.state.bookmarks} removeBookmark={this.removeBookmark} />
            </div>
          </div>
        </div>
        <footer class="footer">
          <p>&copy; 2020 Bookmarker, Inc. | Developed by Oleg Gromov</p>
        </footer>
      </div>
    );
  }
}