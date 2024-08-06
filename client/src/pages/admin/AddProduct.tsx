import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import axios from "axios";

const AddProduct: React.FC = () => {
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [productImage, setProductImage] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!productName || !productPrice || !productDescription || !productImage) {
      setError("Please fill in all fields");
      return;
    }

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("price", productPrice);
    formData.append("description", productDescription);
    formData.append("image", productImage);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/addProduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);

      if (response.data) {
        setSuccess("Product added successfully!");
        setProductName("");
        setProductPrice("");
        setProductDescription("");
        setProductImage(null);
      }

      if (response.data.error) {
        setError(response.data.error);
      }
    } catch (err) {
      setError("An error occurred while adding the product.");
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setProductImage(file);
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="p-4 shadow-lg rounded">
            <Card.Body>
              <h2 className="text-center mb-4">Add New Product</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}
              <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <Form.Group controlId="formProductName" className="mb-3">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formProductPrice" className="mb-3">
                  <Form.Label>Product Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter product price"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formProductDescription" className="mb-3">
                  <Form.Label>Product Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter product description"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formProductImage" className="mb-3">
                  <Form.Label>Product Image</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                  />
                </Form.Group>
                <Button variant="dark" type="submit" className="w-100">
                  Add Product
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProduct;
