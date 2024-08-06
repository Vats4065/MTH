import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import axios, { AxiosResponse } from "axios";
import { useParams } from "react-router-dom";
import "../assets/productpage.css";

// Define the Product interface
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const userId: string | null = localStorage.getItem("MTH-login");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response: AxiosResponse<Product> = await axios.get(
          `http://localhost:5000/api/admin/product/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(
            error.response?.data?.error || "An unexpected error occurred"
          );
        } else {
          setError("An unexpected error occurred");
        }
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleClickInquiry = () => {
    alert("click");
  };

  return (
    <Container className="my-5">
      {error && <h3 className="text-danger text-center">{error}</h3>}
      {product ? (
        <>
          <Row>
            <Col xs={12} md={6} lg={5}>
              <Card className="product-image-card mb-4 shadow-sm">
                <Card.Img
                  variant="top"
                  src={`http://localhost:5000/${product.image}`}
                  alt={product.name}
                  className="product-image"
                  onClick={handleImageClick}
                  style={{ cursor: "pointer" }} // Add pointer cursor to indicate clickable image
                />
              </Card>
            </Col>
            <Col xs={12} md={6} lg={7}>
              <Card className="product-details-card shadow-sm">
                <Card.Body>
                  <Card.Title className="product-title">
                    {product.name}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    ${product.price.toFixed(2)}
                  </Card.Subtitle>
                  <Card.Text className="product-description">
                    {product.description}
                  </Card.Text>

                  {userId ? (
                    <Button variant="outline-dark" onClick={handleClickInquiry}>
                      Click For Inquiry
                    </Button>
                  ) : (
                    <Col>You Have to Login First</Col>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Modal for displaying the larger image */}
          <Modal show={showModal} onHide={handleCloseModal} centered size="xl">
            <Modal.Body>
              <img
                src={`http://localhost:5000/${product.image}`}
                alt={product.name}
                style={{ width: "100%", height: "auto" }}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <h3 className="text-center">Loading...</h3>
      )}
    </Container>
  );
};

export default ProductPage;
