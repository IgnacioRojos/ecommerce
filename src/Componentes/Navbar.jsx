import { Link } from 'react-router-dom';
import "../Styles/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <div className="container">
        <Link className="navbar-brand" to="/">Mi Tienda</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Carrito</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;