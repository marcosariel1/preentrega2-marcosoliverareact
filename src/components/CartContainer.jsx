import { useContext, useState } from "react"
import cartContext from "../context/cartContext"
import { createBuyOrder } from "../data/database";
function CartContainer() {
    const [userData, setUserData] = useState({
        username: "",
        surname: "",
        email: "",
        phone: ""
      })

      function onInputChange(evt){
        //1. Que input modificamos
        const inputName = evt.target.name;   
        // 2. Copiar el state
        const newUserData= {...userData}
        // 3. modifico el nuevo objecot
        newUserData[inputName] = evt.target.value
        // 4. update del state
        setUserData(newUserData)
      }

    const { cartItems, removeItem, getTotalPrice } = useContext(cartContext);

    async function handleCheckout(evt) {
        evt.preventDefault();
        const orderData = {
            buyer: {
                username: userData.username,
                surname: userData.surname,
                phone: userData.phone,
                email: userData.email,
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
              <form>
      <h2>Completa tus datos para completar la compra🛍</h2>
     
        <div style={{ display: 'flex', marginBottom: 8 }}>
          <label style={{ width: '100px', marginRight: 4 }}>Nombre</label>
          <input name="username" type="text" onChange={onInputChange} />
        </div>
     
        <div style={{ display: 'flex', marginBottom: 8 }}>
          <label style={{ width: '100px', marginRight: 4 }}>Apellido</label>
          <input name="surname" type="text" onChange={onInputChange} />
        </div>
     
        <div style={{ display: 'flex', marginBottom: 8 }}>
          <label style={{ width: '100px', marginRight: 4 }}>Teléfono</label>
          <input name="phone" type="text" onChange={onInputChange} />
        </div>

        <div style={{ display: 'flex', marginBottom: 8 }}>
          <label style={{ width: '100px', marginRight: 4 }}>E-mail</label>
          <input name="email" type="text" onChange={onInputChange} />
        </div>
     
      <button
        disabled={!(userData.username !== '' && userData.surname !== '' && userData.phone !== '' && userData.email !== '')}
        onClick={handleCheckout}
      >
        Comprar
      </button>
    </form>



           

        </div>
    );
}

export default CartContainer