const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8083;

app.use(cors());
app.use(express.json());

// Sample product data
const products = [
  { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 29.99 },
  { id: 3, name: 'Product 3', description: 'Description for Product 3', price: 39.99 }
];

// API route to fetch products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Root route
app.get('/', (req, res) => {
  res.send('E-commerce Backend Running');
});

app.listen(PORT, () => {
  console.log(`Backend service is running on port ${PORT}`);
});
