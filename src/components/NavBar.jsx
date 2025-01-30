import CartWidget from "./CartWidget";
import"./NavBar.css"
import { Link } from "react-router-dom";
export default function NavBar() {
  return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <Link to="/"><img src="/images/logo-rock-store.png" className="sizeLogo" alt="logo" /></Link>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
            <Link className="nav-link" to="/category/Guitarras">Guitarras</Link>
            <Link className="nav-link" to="/category/Amplificadores">Amplificadores</Link>
            <Link className="nav-link" to="/category/Pedales">Pedales</Link>
            <Link className="nav-link" to="/category/Accesorios">Accesorios</Link>
            <Link className="nav-link" to="/cart">Carrito</Link>
          </div>
        </div>
      </div>
      <CartWidget />
    </nav>


  </>;


}