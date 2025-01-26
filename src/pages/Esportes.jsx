import "../styles/Products.css";

const Esportes = () => {
  const produtos = [
    { id: 1, nome: "Bola de Futebol", preco: "R$ 49,90", imagem: "/images/bola.jpg" },
    { id: 2, nome: "Raquete de Tênis", preco: "R$ 159,90", imagem: "/images/raquete.jpg" },
    { id: 3, nome: "Tênis de Corrida", preco: "R$ 199,00", imagem: "/images/tenisdecorrida.jpg" },
  ];

  return (
    <div className="products-page">
      <h2>Esportes</h2>
      <div className="product-list">
        {produtos.map((produto) => (
          <div className="product-card" key={produto.id}>
            <img src={produto.imagem} alt={produto.nome} className="product-image" />
            <div className="product-info">
              <h3>{produto.nome}</h3>
              <p>{produto.preco}</p>
              <button className="product-button">Comprar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Esportes;
