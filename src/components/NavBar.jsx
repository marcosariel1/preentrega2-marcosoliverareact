import CartWidget from "./CartWidget";
import "./NavBar.css"
import { Link } from "react-router-dom";

export default function NavBar() {
  return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/"><img src="/images/logo-rock-store.png" className="sizeLogo" alt="logo" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
            <Link className="nav-link" to="/category/Guitarras">Guitarras</Link>
            <Link className="nav-link" to="/category/Amplificadores">Amplificadores</Link>
            <Link className="nav-link" to="/category/Pedales">Pedales</Link>
            <Link className="nav-link" to="/category/Accesorios">Accesorios</Link>
            <Link className="nav-link" to="/cart"><CartWidget /></Link>
          </div>
        </div>
      </div>
    </nav>
  </>;
}