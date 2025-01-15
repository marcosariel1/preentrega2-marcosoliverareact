import { useState } from "react"


export default function ItemCount() {
const [count, setCount]= useState (1);

const handleAdd = () => {
    setCount (count +1);

}

const handleSubstract = () => {
    setCount (count -1);

}



  return (
    <div>
        <button onClick={handleSubstract}>➖</button>
        <span >{count}</span>
        <button onClick={handleAdd}>➕</button>
        
        
        </div>
  )
}
