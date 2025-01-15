import Item from "./Item";

export default function ItemList(props) {
  return (
    <>
    
   <h1>{props.greeting}</h1>

   
    {props.products.map((item) =>(
        <Item
        key={item.id}
        title={item.title}
        price={item.price}
        text={item.text}
        img={item.img}
        />



    ))}
    </>
    );
    }

   
    

