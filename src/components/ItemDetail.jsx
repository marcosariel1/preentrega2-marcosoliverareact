import products from "../data/data";
import Button from "./Button";
import ItemCount from "./ItemCount";




export default function ItemDetail(props) {
  const { title, price, img, description, stock } = props;

  return (
    <div>
      <h2>{title}</h2>
      <img src={img} alt="imagen" />
      <h3>${price}</h3>
      <h4>{description}</h4>
      <small>Stock: {stock}</small>
      <Button text="Agregar al carrito" />
      <ItemCount stock={stock} />
    </div>
  );
}
