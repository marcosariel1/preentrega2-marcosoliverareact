import Item from "./Item";
import "../App.css";

export default function ItemList(props) {
  return (
    <div className="flex-container"
      style={{
        backgroundImage: `url(/images/fondometal.jpg)`,
        backgroundSize: 'contain',
        borderRadius: '0.5em',
      }}>

      <h2>{props.greeting}</h2>

      {props.products.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          text={item.text}
          img={item.img}
        />
      ))}
    </div>
  );
}




