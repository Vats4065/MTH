import React from "react";
import { Card, Button } from "react-bootstrap";
import "../assets/productcard.css";

const ProductCard = ({ product }) => {
  return (
    <Card className="shadow-lg border-light rounded product-card">
      <div className="image-container">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="card-img"
        />
      </div>
      <Card.Body>
        <Card.Title className="text-center">{product.name}</Card.Title>
        <Card.Text className="text-center text-muted">
          ${product.price}
        </Card.Text>
        <div className="d-grid">
          <Button variant="dark">View Details</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
