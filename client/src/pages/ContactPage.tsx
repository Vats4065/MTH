import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/contactpage.css";

const ContactPage = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Card className="contact-card shadow-sm">
            <Card.Body>
              <Card.Title className="text-center mb-4">Contact Us</Card.Title>
              <Form>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your message"
                  />
                </Form.Group>
                <Button variant="dark" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>

              <div className="contact-details mt-4">
                <h5>Contact Details</h5>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faPhone} className="me-2" />
                    <span>+1 (555) 123-4567</span>
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                    <span>info@example.com</span>
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                    <span>123 Main Street, Anytown, USA</span>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
