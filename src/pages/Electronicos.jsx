import "../styles/Products.css";

const Electronicos = () => {
  const produtos = [
    { id: 1, nome: "Smartphone", preco: "R$ 1.499,00", imagem: "/images/smartphone.jpg" },
    { id: 2, nome: "Notebook", preco: "R$ 3.299,00", imagem: "/images/notebook.jpg" },
    { id: 3, nome: "Fone de ouvido", preco: "R$ 199,00", imagem: "/images/fone.jpg" },
  ];

  return (
    <div className="products-page">
      <h2>Eletrônicos</h2>
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

export default Electronicos;
