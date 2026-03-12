import { useEffect, useState } from "react";
import Product from "./Product";

function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then(res => res.json())
      .then(data => setProducts(data.content));
  }, []);

  const addToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
      padding: "20px"
    }}>

      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}

    </div>
  );
}

export default ProductList;