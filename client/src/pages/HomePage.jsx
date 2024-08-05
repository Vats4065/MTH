import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import "../assets/home.css";
import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/admin/product"
      );
      console.log(response);
      setProducts(response.data);
    };
    getAll();
  }, []);

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
