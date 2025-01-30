import { createContext, useState } from "react";


const cartContext = createContext("carrito");

export function CartContextProvider(props) {
    const [cartItems, setCartItems] = useState([]);


function removeItem(id) {
    const newCartState = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartState);
}




    function addItem({ id, price, title, count, img }) {
        //const copyCartItems = cartItems.map((item) => ({ ...item }));
        const copyCartItems = JSON.parse(JSON.stringify(cartItems));
        copyCartItems.push({ id, price, title, count, img });
        setCartItems(copyCartItems);
    }
    function cartItemsCount() {
        let total   = 0;

        cartItems.forEach((item) =>{
            total += item.count;
        });
        return total;

        };
    


    return <cartContext.Provider
        value={{
            cartItems: cartItems,
            cartItemsCount,
            addItem: addItem,
            removeItem: removeItem,
            
        }}>
        {props.children}

    </cartContext.Provider>
}

export default cartContext;
