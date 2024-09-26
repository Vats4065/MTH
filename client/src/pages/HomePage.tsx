import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import "../assets/home.css";
import axios, { AxiosResponse } from "axios";
import addNotification from "react-push-notification";
import { Notifications } from "react-push-notification";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");

  function warningNotification() {
    addNotification({
      title: "Warning",
      subtitle: "Please fill it",
      message: "You have to enter name",
      theme: "red",
      closeButton: "X",
    });
  }

  function successNotification() {
    addNotification({
      title: "Success",
      subtitle: "You have successfully submitted",
      message: "Welcome to GeeksforGeeks",
      theme: "light",
      closeButton: "X",
      backgroundTop: "green",
      backgroundBottom: "yellowgreen",
    });
  }

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (name === "") warningNotification();
    else successNotification();
  }

  useEffect(() => {
    const getAll = async () => {
      try {
        const response: AxiosResponse<Product[]> = await axios.get(
          "http://localhost:5000/api/admin/product"
        );

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
            <Col key={product?._id} className="d-flex justify-content-center">
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
    // <form>
    //   <label>Name:</label>
    //   <input
    //     name="name"
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    //   />
    //   <button onClick={handleSubmit} type="submit">
    //     Submit
    //   </button>
    // </form>
  );
};

export default HomePage;
