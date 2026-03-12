import { useEffect, useState } from "react";
import Product from "../components/Product";

function Home({ addToCart }) {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const loadProducts = () => {

    let url = "http://localhost:8080/products?";

    if (search) {
      url += `keyword=${search}&`;
    }

    if (category) {
      url += `category=${category}&`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data.content))
      .catch(err => console.error("Error loading products", err));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div style={{ padding: "20px", background: "#eaeded" }}>

      <div style={{ marginBottom: "20px" }}>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "10px", width: "250px", marginRight: "10px" }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: "10px", marginRight: "10px" }}
        >

          <option value="">All Categories</option>
          <option value="Phones">Phones</option>
          <option value="Laptops">Laptops</option>
          <option value="Accessories">Accessories</option>
          <option value="Books">Books</option>

        </select>

        <button
          onClick={loadProducts}
          style={{ padding: "10px", background: "#ff9900", border: "none" }}
        >
          Search
        </button>

      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
          gap: "20px"
        }}
      >

        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}

      </div>

    </div>
  );
}

export default Home;