import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import "../assets/home.css";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "29.99",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Product 2",
    price: "39.99",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Product 3",
    price: "49.99",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    name: "Product 4",
    price: "59.99",
    image: "https://via.placeholder.com/300x200",
  },
];

const HomePage = () => {
  return (
    <Container className="my-4">
      <h1 className="mb-4 text-center">Products</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id} className="d-flex justify-content-center">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
