import React from 'react';
import FormGroup from '../Task8formGroup/';

export default function Jumbotron(props) {

  return (
    <div className="jumbotron">
      <h2>Bookmark your favorite Sites</h2>
      <form id="myForm" action="" onSubmit="saveBookmark" >
        <FormGroup label="Site Name" id="siteName" placeholder="Website Name" />
        <FormGroup label="Site URL" id="siteUrl" placeholder="Website URL" />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}