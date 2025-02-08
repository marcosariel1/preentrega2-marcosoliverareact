import Button from "./Button";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import cartContext from "../context/cartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

export default function ItemDetail(props) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const { title, price, img, description, stock, id } = props;
  const { addItem } = useContext(cartContext);

  function handledAddToCart(count) {

    addItem({ id, price, title, count, img });
    setIsAddedToCart(true);
  }

  return (
    <div className="itemDetail">
      <h2>{title}</h2>
      <img style={{ width: "25rem" }} src={img} alt="imagen" />
      <h3>${price}</h3>
      <h4>{description}</h4>
      <small>Stock: {stock}</small>
      <div>
        {
          isAddedToCart
            ? <Link to='/cart'>
              <Button text="Ver carrito" />
            </Link>
            : <ItemCount onSubmitCount={handledAddToCart} max={stock} />

        }

      </div>
    </div>
  );
}
