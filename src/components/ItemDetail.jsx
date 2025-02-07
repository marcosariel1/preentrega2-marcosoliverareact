import products from "../data/data";
import Button from "./Button";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import cartContext from "../context/cartContext";
import { useState } from "react";
import { Link } from "react-router-dom";




export default function ItemDetail(props) {
  const[isAddedToCart, setIsAddedToCart] = useState(false);

  const { title, price, img, description, stock, id } = props;
  const { addItem } = useContext(cartContext);

  function handledAddToCart(count) {
    console.log("Agregado al carrito", (count));
addItem({ id, price, title, count, img });
setIsAddedToCart(true);
  }

  return (
    <div>
      <h2>{title}</h2>
      <img src={img} alt="imagen" />
      <h3>${price}</h3>
      <h4>{description}</h4>
      <small>Stock: {stock}</small>
      <div>
        {
          isAddedToCart 
          ? <Link to='/cart'>
          <Button text="Ver carrito"/> 
          </Link>
          :<ItemCount onSubmitCount={handledAddToCart} max={stock} />

        }


      </div>


    </div>
  );
}
