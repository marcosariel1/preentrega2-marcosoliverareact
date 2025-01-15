import './Button.css'
import { useState } from 'react';

export default function Button(props) {


  return (
    <div>
      <button className="card-button">{props.text}</button>

    </div>
  )
}
