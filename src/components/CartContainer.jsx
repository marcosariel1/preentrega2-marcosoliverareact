import { useContext } from "react"
import  cartContext  from "../context/cartContext"
function CartContainer() {
    const { cartItems, removeItem } = useContext(cartContext);
    return (
        <div>
            <h1>Tu carrito</h1>

            {cartItems.map((item) => (
                <>
                
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>Precio: ${item.price}</p>
                    <p>Unidades: {item.count}</p>
                    <button onClick={() => removeItem(item.id)}>Eliminar</button>

                    


                </div>
                <hr />
                </>




            ))

            }
        </div>
    );
}

export default CartContainer