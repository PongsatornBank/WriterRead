import React from 'react';

function ProductCatalog() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 10.99,
      image: 'https://i.ibb.co/8j7Z2jc/img1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      image: 'https://i.ibb.co/8j7Z2jc/img1.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      price: 29.99,
      image: 'https://i.ibb.co/8j7Z2jc/img1.jpg',
    },
  ];

  return (
    <div className="product-catalog">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCatalog;
