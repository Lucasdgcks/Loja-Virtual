import { Link } from "react-router-dom";
import "../styles/Home.css";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="categories">
        <h2>Categorias</h2>
        <div className="categories-grid">
          <Link to="/electronicos" className="category-card">
            <h3>Eletrônicos</h3>
          </Link>
          <Link to="/moda" className="category-card">
            <h3>Moda</h3>
          </Link>
          <Link to="/livros" className="category-card">
            <h3>Livros</h3>
          </Link>
          <Link to="/esportes" className="category-card">
            <h3>Esportes</h3>
          </Link>
        </div>
      </div>

      {/* Seção "Sobre Nós" */}
      <div className="about-us">
        <h2>Sobre Nós</h2>
        <p>
          Bem-vindo à nossa loja virtual, um espaço pensado para oferecer aos nossos clientes uma experiência de compras única. 
          Aqui, você encontra produtos de alta qualidade nas mais diversas categorias, como eletrônicos, moda, livros e esportes. 
          Nosso objetivo é proporcionar ofertas exclusivas e um atendimento de excelência para que sua experiência de compra seja
          simples, segura e satisfatória. 
        </p>
        <p>
          Estamos sempre em busca das melhores marcas e dos produtos mais inovadores para trazer o que há de mais moderno 
          no mercado até você. A nossa missão é tornar suas compras mais agradáveis e práticas, com um catálogo diversificado 
          e entrega rápida para todo o Brasil.
        </p>
      </div>
    </div>
  );
};

export default Home;