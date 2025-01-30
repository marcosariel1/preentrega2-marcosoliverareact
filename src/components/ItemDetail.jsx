import products from "../data/data";
import Button from "./Button";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import cartContext from "../context/cartContext";




export default function ItemDetail(props) {
  const { title, price, img, description, id, stock } = props;
  const { addItem } = useContext(cartContext);

  function handledAddToCart(count) {
    console.log("Agregado al carrito", (count));
addItem({ id, price, title, count, img });
  }

  return (
    <div>
      <h2>{title}</h2>
      <img src={img} alt="imagen" />
      <h3>${price}</h3>
      <h4>{description}</h4>
      <small>Stock: {stock}</small>
      <ItemCount onSubmitCount={handledAddToCart} max={stock} />


    </div>
  );
}
