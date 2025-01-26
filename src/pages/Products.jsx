import "../styles/Products.css";

const Products = () => {
  const produtos = [
    // Produtos da categoria Eletrônicos
    { id: 1, categoria: "Eletrônicos", nome: "Smartphone", preco: "R$ 1.499,00", imagem: "/images/smartphone.jpg" },
    { id: 2, categoria: "Eletrônicos", nome: "Notebook", preco: "R$ 3.299,00", imagem: "/images/notebook.jpg" },
    { id: 3, categoria: "Eletrônicos", nome: "Fone de ouvido", preco: "R$ 199,00", imagem: "/images/fone.jpg" },

    // Produtos da categoria Moda
    { id: 4, categoria: "Moda", nome: "Camiseta", preco: "R$ 49,90", imagem: "/images/camiseta.jpg" },
    { id: 5, categoria: "Moda", nome: "Calça Jeans", preco: "R$ 129,90", imagem: "/images/calca.jpg" },
    { id: 6, categoria: "Moda", nome: "Tênis", preco: "R$ 199,00", imagem: "/images/tenis.jpg" },

    // Produtos da categoria Livros
    { id: 7, categoria: "Livros", nome: "Harry Potter", preco: "R$ 39,90", imagem: "/images/harrypotter.jpg" },
    { id: 8, categoria: "Livros", nome: "O Senhor dos Anéis", preco: "R$ 89,90", imagem: "/images/senhor.jpg" },
    { id: 9, categoria: "Livros", nome: "1984", preco: "R$ 29,90", imagem: "/images/1984.jpg" },

    // Produtos da categoria Esportes
    { id: 10, categoria: "Esportes", nome: "Bola de Futebol", preco: "R$ 49,90", imagem: "/images/bola.jpg" },
    { id: 11, categoria: "Esportes", nome: "Raquete de Tênis", preco: "R$ 159,90", imagem: "/images/raquete.jpg" },
    { id: 12, categoria: "Esportes", nome: "Tênis de Corrida", preco: "R$ 199,00", imagem: "/images/tenisdecorrida.jpg" },
  ];

  return (
    <div className="products-page">
      <h2>Todos os Produtos</h2>
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

export default Products;
