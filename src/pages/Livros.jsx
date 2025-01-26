import "../styles/Products.css";

const Livros = () => {
  const produtos = [
    { id: 1, nome: "Harry Potter", preco: "R$ 39,90", imagem: "/images/harrypotter.jpg" },
    { id: 2, nome: "O Senhor dos Anéis", preco: "R$ 89,90", imagem: "/images/senhor.jpg" },
    { id: 3, nome: "1984", preco: "R$ 29,90", imagem: "/images/1984.jpg" },
  ];

  return (
    <div className="products-page">
      <h2>Livros</h2>
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

export default Livros;
