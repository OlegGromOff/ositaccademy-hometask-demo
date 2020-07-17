import React from 'react';

const BookmarksResult = ({ bookmarks, removeBookmark }) => {

  if (!bookmarks  || bookmarks.length === 0) return null;

  return (
    <div className="bottom-form-side">
      {bookmarks.map((item, a) => {
        return (
          <h3 key={a}>{item.name}
            <a className="btn btn-default" target="_blank" rel="noopener noreferrer" href={item.url}>Visit</a>
            <button onClick={() => removeBookmark(item.url)}
              className="btn btn-danger"
            >Delete</button>
          </h3>
        )
      })}
    </div>
  );
};

export default BookmarksResult;