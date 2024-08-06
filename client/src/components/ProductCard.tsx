import React from "react";
import { Card, Button } from "react-bootstrap";
import "../assets/productcard.css";

// Define the type for the product prop
interface Product {
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="shadow-lg border-light rounded product-card">
      <div className="image-container">
        <Card.Img
          variant="top"
          src={`http://localhost:5000/${product?.image}`}
          alt={product.name}
          className="card-img"
        />
      </div>
      <Card.Body>
        <Card.Title className="text-center">{product.name}</Card.Title>
        <Card.Text className="text-center text-muted">
          ${product.price.toFixed(2)}
        </Card.Text>
        <div className="d-grid">
          <Button variant="dark">View Details</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
