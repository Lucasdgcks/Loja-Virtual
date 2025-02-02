import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">R$ {product.price.toFixed(2)}</p>
      <button className="add-to-cart">Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductCard;
