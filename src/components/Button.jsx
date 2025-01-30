import './Button.css'
import { useState } from 'react';

export default function Button(props) {
  const {onClick} = props;


  return (
    <div>
      <button onClick={onClick} className="card-button">{props.text}</button>

    </div>
  )
}
