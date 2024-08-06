import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../assets/productcard.css";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = (id: string) => {
    console.log(id);

    navigate(`/product/${id}`);
  };

  return (
    <Card className="shadow-lg border-light rounded product-card">
      <div className="image-container">
        <Card.Img
          variant="top"
          src={`http://localhost:5000/${product.image}`}
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
          <Button
            variant="dark"
            onClick={() => handleViewDetails(product?._id)}
          >
            View Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
