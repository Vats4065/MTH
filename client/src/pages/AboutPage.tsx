import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../assets/about.css";

const AboutPage = () => {
  return (
    <Container className="my-5">
      <Row className="text-center mb-4">
        <Col>
          <h1 className="mb-4">About Us</h1>
          <p className="lead">
            We are a team of dedicated professionals committed to delivering
            top-notch solutions.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/300"
              className="card-img"
            />
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                Our mission is to provide exceptional service and innovative
                solutions to our clients.
              </Card.Text>
              <Button variant="dark">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/300"
              className="card-img"
            />
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                We envision a future where technology and creativity merge to
                drive progress and success.
              </Card.Text>
              <Button variant="dark">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/300"
              className="card-img"
            />
            <Card.Body>
              <Card.Title>Our Values</Card.Title>
              <Card.Text>
                Integrity, excellence, and innovation are the core values that
                guide our approach and decisions.
              </Card.Text>
              <Button variant="dark">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
