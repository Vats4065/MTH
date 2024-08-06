import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import "../assets/home.css";
import axios, { AxiosResponse } from "axios";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAll = async () => {
      try {
        const response: AxiosResponse<Product[]> = await axios.get(
          "http://localhost:5000/api/admin/product"
        );
        console.log(response);
        if (response.status === 200) {
          setProducts(response.data);
        }
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
    getAll();
  }, []);

  return (
    <Container className="my-4">
      <h1 className="mb-4 text-center">Products</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.length > 0 ? (
          products.map((product) => (
            <Col key={product.id} className="d-flex justify-content-center">
              <ProductCard product={product} />
            </Col>
          ))
        ) : (
          <Col className="d-flex justify-content-center w-100 text-center text-secondary">
            <h3>No products available</h3>
          </Col>
        )}
        {error && (
          <Col className="d-flex justify-content-center w-100 text-center text-danger">
            <h3>{error}</h3>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default HomePage;
