import { useContext } from "react"
import cartContext from "../context/cartContext"
import { createBuyOrder } from "../data/database";
function CartContainer() {
    const { cartItems, removeItem, getTotalPrice } = useContext(cartContext);

    async function handleCheckout() {
        const orderData = {
            buyer: {
                name: "Pedro",
                email: "u5YtI@example.com",
            },
            items: cartItems,
            total: getTotalPrice(),
            date: new Date()
        };
        const newOrderId = await createBuyOrder(orderData);
        console.log("compra realizada", newOrderId);



     }
    return (
        <div>
            <h1>Tu carrito</h1>

            {cartItems.map((item) => (
                <div key={item.id}>
                

                    <div>
                        <h2>{item.title}</h2>
                        <img src={item.img} alt="imagen producto" />
                        <p>Precio: ${item.price}</p>
                        <p>Unidades: {item.count}</p>
                        <button onClick={() => removeItem(item.id)}>Eliminar</button>




                    </div>
                    <hr />
                </div>




            ))

            }
            <button onClick={handleCheckout}>Comprar</button>

        </div>
    );
}

export default CartContainer