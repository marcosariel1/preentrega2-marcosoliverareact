import { useContext } from "react";
import cartContext from "../context/cartContext";
export default function CartWidget() {
    const context = useContext(cartContext);
    
    return <>
    <button className="nav-link">Carrito🛒 
    <span>{context.cartItemsCount()}</span>
    </button>
    </>;
}