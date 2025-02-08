import { createContext, useState } from "react";



const cartContext = createContext("carrito");

export function CartContextProvider(props) {
    const [cartItems, setCartItems] = useState([]);

    function getTotalPrice() {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalPrice += item.price * item.count;
        });
        return totalPrice;
    }

    function removeItem(id) {
        const newCartState = cartItems.filter((item) => item.id !== id);
        setCartItems(newCartState);
    }

    function addItem({ id, price, title, count, img }) {
        const copyCartItems = JSON.parse(JSON.stringify(cartItems));

        const existingItemInCart = cartItems.some(item => item.id === id);

        if (!existingItemInCart) {
            copyCartItems.push({ id, price, title, count, img });
        } else {
            const indexInCart = cartItems.findIndex(item => item.id === id);
            copyCartItems[indexInCart].count += count;
        }

        setCartItems(copyCartItems);
    }

    function cartItemsCount() {
        let total = 0;

        cartItems.forEach((item) => {
            total += item.count;
        });
        return total;
    }

    // función para vaciar el carrito
    function clearCart() {
        setCartItems([]);
    }

   return (
        <cartContext.Provider
            value={{
                cartItems,
                cartItemsCount,
                addItem,
                removeItem,
                getTotalPrice,
                clearCart 
            }}
        >
            {props.children}
        </cartContext.Provider>
    );
}

export default cartContext;
