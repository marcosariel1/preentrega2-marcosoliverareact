import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/database";

function CartContainer() {
    const [userData, setUserData] = useState({
        username: "",
        surname: "",
        email: "",
        phone: ""
    });

    const [purchaseId, setPurchaseId] = useState(null);

    function onInputChange(evt) {
        const inputName = evt.target.name;
        const newUserData = { ...userData };
        newUserData[inputName] = evt.target.value;
        setUserData(newUserData);
    }

    const { cartItems, removeItem, getTotalPrice, clearCart } = useContext(cartContext);

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
        setPurchaseId(newOrderId); // Actualiza el estado con el ID de la compra
        clearCart(); // Vacía el carrito
        console.log("compra realizada", newOrderId);
    }

    // Función para calcular el precio total
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            return total + item.price * item.count;
        }, 0);
    };

    return (
        <div>
            <h1>{purchaseId ? "Gracias por tu compra" : (cartItems.length === 0 ? "Tu carrito está vacío" : "Tu carrito")}</h1>

            {cartItems.map((item) => (
                <div key={item.id}>
                    <div>
                        <h2>{item.title}</h2>
                        <img style={{ width: "25rem" }} src={item.img} alt="imagen producto" />
                        <p>Precio: ${item.price}</p>
                        <p>Unidades: {item.count}</p>
                        <button onClick={() => removeItem(item.id)} className="btn btn-outline-secondary">Eliminar</button>
                    </div>
                    <hr />
                </div>
            ))}

            {cartItems.length > 0 && (
                <h3>Total: ${calculateTotal()}</h3>
            )}

            {cartItems.length > 0 && !purchaseId && (
                <form>
                    <h2>Completa tus datos para finalizar la compra</h2>
                    <div style={{ display: 'flex', marginBottom: 8 }}>
                        <label style={{ width: '100px', marginRight: 4 }}>Nombre</label>
                        <input
                            name="username"
                            type="text"
                            onChange={onInputChange}
                            pattern="[A-Za-z]+"
                            title="Ingrese su nombre"
                            required />
                    </div>
                    <div style={{ display: 'flex', marginBottom: 8 }}>
                        <label style={{ width: '100px', marginRight: 4 }}>Apellido</label>
                        <input
                            name="surname"
                            type="text"
                            onChange={onInputChange}
                            pattern="[A-Za-z]+"
                            title="Ingrese su apellido"
                            required />
                    </div>
                    <div style={{ display: 'flex', marginBottom: 8 }}>
                        <label style={{ width: '100px', marginRight: 4 }}>Teléfono</label>
                        <input
                            name="phone"
                            type="text"
                            onChange={onInputChange}
                            pattern="[0-9]+"
                            title="Ingrese su número"
                            required />
                    </div>
                    <div style={{ display: 'flex', marginBottom: 8 }}>
                        <label style={{ width: '100px', marginRight: 4 }}>E-mail</label>
                        <input
                            name="email"
                            type="email"
                            onChange={onInputChange}
                            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                            title="Ingrese su e-mail. Debe contener un carácter '@'"
                            required />
                    </div>
                    <button className="btn btn-success"
                        disabled={!(userData.username !== '' && userData.surname !== '' && userData.phone !== '' && userData.email !== '')}
                        onClick={handleCheckout}
                    >
                        Comprar
                    </button>
                </form>
            )}

            {purchaseId && (
                <div>
                    <p>Tu ID de compra es: {purchaseId}</p>
                </div>
            )}

        </div>
    );
}

export default CartContainer;

