import "./Product.css";

function Product({ product, addToCart }) {

  return (
    <div className="product">

      <img
        className="product-image"
        src={product.imageUrl || "https://via.placeholder.com/200"}
        alt={product.name}
      />

      <h3 className="product-title">{product.name}</h3>

      <p className="product-description">
        {product.description}
      </p>

      <p className="product-price">
        <strong>
          {product.price?.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR"
          })}
        </strong>
      </p>

      <button
        className="product-button"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default Product;