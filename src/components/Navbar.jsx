import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Loja Virtual</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Produtos</Link>
        <Link to="/cart">Carrinho</Link>
      </div>
    </nav>
  );
};

export default Navbar;

