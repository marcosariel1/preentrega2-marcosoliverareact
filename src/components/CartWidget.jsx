import { useContext } from "react";
import cartContext from "../context/cartContext";
export default function CartWidget() {
    const context = useContext(cartContext);
    
    return <>
    <button className="nav-link">Carrito🛒 
    { 
    context.cartItemsCount() > 0 ?
    <span>{context.cartItemsCount()}</span> : null

    }
    </button>
    </>;
}