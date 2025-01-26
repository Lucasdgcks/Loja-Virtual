import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Electronicos from "./pages/Electronicos";
import Moda from "./pages/Moda";
import Livros from "./pages/Livros";
import Esportes from "./pages/Esportes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/electronicos" element={<Electronicos />} />
          <Route path="/moda" element={<Moda />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/esportes" element={<Esportes />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;