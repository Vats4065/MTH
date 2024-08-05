import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../assets/productpage.css";

const ProductPage = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={6} lg={5}>
          <Card className="product-image-card mb-4 shadow-sm">
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/600x400"
              className="product-image"
            />
          </Card>
        </Col>
        <Col xs={12} md={6} lg={7}>
          <Card className="product-details-card shadow-sm">
            <Card.Body>
              <Card.Title className="product-title">Product Name</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">$49.99</Card.Subtitle>
              <Card.Text className="product-description">
                This is a brief description of the product. It highlights the
                main features and benefits.
              </Card.Text>
              <Button variant="primary" className="me-2">
                Add to Cart
              </Button>
              <Button variant="secondary">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
