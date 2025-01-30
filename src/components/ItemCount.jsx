import { useState } from "react"
import Button from "./Button";


export default function ItemCount(props) {
  let [count, setCount] = useState(1);
  const { onSubmitCount } = props;

  const handleAdd = () => {
    if (count >= props.max) return;  
    setCount(count + 1);
   
  }

  const handleSubstract = () => {
    if (count <= 1) return;
    setCount(count - 1);

  }



  return (
    <div>
      <div>

        <button onClick={handleSubstract}>➖</button>
        <span >{count}</span>
        <button onClick={handleAdd}>➕</button>

      </div>

      <div>
        <Button onClick={ () => onSubmitCount (count)} text="Agregar al carrito" ></Button>
      </div>


    </div>
  )
}
