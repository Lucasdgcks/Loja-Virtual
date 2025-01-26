import "../styles/Products.css";

const Moda = () => {
  const produtos = [
    { id: 1, nome: "Camiseta", preco: "R$ 49,90", imagem: "/images/camiseta.jpg" },
    { id: 2, nome: "Calça Jeans", preco: "R$ 129,90", imagem: "/images/calca.jpg" },
    { id: 3, nome: "Tênis", preco: "R$ 199,00", imagem: "/images/tenis.jpg" },
  ];

  return (
    <div className="products-page">
      <h2>Moda</h2>
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

export default Moda;
