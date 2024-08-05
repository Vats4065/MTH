import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../assets/navbar.css";
import { findUserByApi } from "../services/ApiServices";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const userId = localStorage.getItem("MTH-login");
  const handleLogout = () => {
    localStorage.removeItem("MTH-login");
    navigate("/login");
  };

  useEffect(() => {
    if (userId) {
      findUserByApi(userId).then((data) => setUserDetails(data?.data));
    }
  }, [userId]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar-custom");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      className="navbar-custom navbar-shadow"
    >
      <Container>
        <Navbar.Brand to="/" as={Link} className="fw-bolder me-5">
          <img
            src="https://5.imimg.com/data5/SELLER/Logo/2024/4/408085998/LR/KD/RO/23991215/logo-120x120.jpg"
            alt="Logo"
            className="navbar-logo"
            height={50}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-responsive" />

        <Navbar.Collapse id="navbar-responsive">
          <Nav className="me-auto fw-bolder">
            <Stack direction="horizontal" gap={3} className="d-none d-lg-flex">
              <Link to="/" className="link-dark text-decoration-none">
                Home
              </Link>
              <Link to="/about" className="link-dark text-decoration-none">
                About Us
              </Link>

              {!userId ? (
                <>
                  <Link to="/login" className="link-dark text-decoration-none">
                    Login
                  </Link>
                  <Link to="/signup" className="link-dark text-decoration-none">
                    Signup
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/contact"
                    className="link-dark text-decoration-none"
                  >
                    Contact
                  </Link>
                  <Link
                    as="button"
                    className="link-dark text-decoration-none"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </>
              )}
            </Stack>
          </Nav>

          <Stack direction="vertical" gap={3} className="d-lg-none">
            <Link to="/" className="link-dark text-decoration-none">
              Home
            </Link>
            <Link to="/contact" className="link-dark text-decoration-none">
              Contact
            </Link>
            <Link to="/about" className="link-dark text-decoration-none">
              About Us
            </Link>
            {!userId ? (
              <>
                <Link to="/login" className="link-dark text-decoration-none">
                  Login
                </Link>
                <Link to="/signup" className="link-dark text-decoration-none">
                  Signup
                </Link>
              </>
            ) : (
              <>
                <Link to="/contact" className="link-dark text-decoration-none">
                  Contact
                </Link>
                <Link
                  as="button"
                  className="link-dark text-decoration-none"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </>
            )}
          </Stack>
          {userDetails?.user && (
            <Navbar.Text className="text-capitalize">
              Welcome {userDetails?.user?.name}{" "}
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
