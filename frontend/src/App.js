import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>E-commerce Store</h1>
        <div className="product-list">
          {products.length ? (
            products.map((product) => (
              <div key={product.id} className="product">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
