import React from 'react';

export default function FormGroup(props) {
  return (
    <div className="form-group">
      <label for="">{props.label}</label>
      <input type="text" className="form-control" id={props.id} placeholder={props.placeholder} />
    </div>
  )

}