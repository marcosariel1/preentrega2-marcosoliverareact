import { useContext } from "react";
import cartContext from "../context/cartContext";
export default function CartWidget() {
    const context = useContext(cartContext);

    return <>
        <button type="button" className="btn btn-outline-secondary">Carrito🛒
            {
                context.cartItemsCount() > 0 ?
                    <span>{context.cartItemsCount()}</span> : null

            }
        </button>
    </>;
}