import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import "./NavBar.css";
import { useTranslation, Trans } from "react-i18next";

// library import
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { getDefaultNormalizer } from "@testing-library/dom";

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const [modalShow, setModalShow] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [local, setLocal] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  useEffect(() => {
    setName(cookies.Name);
    setEmail(cookies.Email);
    setPwd(cookies.Password);
    setLocal(cookies.Local);
    if (cookies.Name) {
      setIsLogged(true);
    }
  }, []);

  const clickLogout = () => {
    removeCookie("Name", { path: "/" });
    removeCookie("Password", { path: "/" });
    removeCookie("Email", { path: "/" });
    removeCookie("Local", { path: "/" });

    setIsLogged(false);
    setName("");
    setEmail("");
    setPwd("");
    setLocal("");
  };

  const saveForm = () => {
    setCookie("Name", name, { path: "/" });
    setCookie("Email", email, { path: "/" });
    setCookie("Password", pwd, { path: "/" });
    setCookie("Local", local, { path: "/" });
    console.log(name, email, pwd, local);
    setIsLogged(true);

    setModalShow(false);
  };

  const handleChange = (event) => {
    // console.log(event.target.id, event.target.value);
    if (event.target.id === "name") {
      setName(event.target.value);
    } else if (event.target.id === "email") {
      setEmail(event.target.value);
    } else if (event.target.id === "pwd") {
      setPwd(event.target.value);
    } else if (event.target.id === "local") {
      setLocal(event.target.value);
    }
  };

  const localChange = (event) => {
    console.log("--------", event.target.id);
    setLocal(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div>
          <img
            className="icon"
            src="data:image/png;base64,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"
          />
        </div>
        <Navbar.Brand href="/">Scorp Sample</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Form.Group controlId="local">
              <Form.Control
                as="select"
                defaultValue="Choose..."
                onChange={localChange}
              >
                <option>Choose...</option>
                <option>Turkey</option>
                <option>United_States_of_America</option>
                <option>United_Kingdom</option>
                <option>Germany</option>
                <option>Sweden</option>
                <option>Kenya</option>
                <option>Brazil</option>
                <option>Zimbabwe</option>
              </Form.Control>
            </Form.Group>
            {isLogged ? (
              <Nav>
                <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                <NavDropdown
                  title={name}
                  id="collasible-nav-dropdown"
                  style={{ marginRight: "4rem" }}
                >
                  <NavDropdown.Item>Email: {email}</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={clickLogout}>
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              <Nav.Link
                onClick={() => setModalShow(true)}
                style={{ marginRight: "4rem" }}
              >
                Log in
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal
        size="lg"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Label htmlFor="name" srOnly>
                Name
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="name"
                placeholder="Jane Doe"
                onChange={handleChange}
              />
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="pwd">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group controlId="local">
                <Form.Label>Local</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  onChange={handleChange}
                >
                  <option>Choose...</option>
                  <option>Turkey</option>
                  <option>United_States_of_America</option>
                  <option>United_Kingdom</option>
                  <option>Germany</option>
                  <option>Sweden</option>
                  <option>Kenya</option>
                  <option>Brazil</option>
                  <option>Zimbabwe</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={saveForm}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
