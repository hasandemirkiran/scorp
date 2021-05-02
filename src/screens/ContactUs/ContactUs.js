import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useTranslation, Trans } from "react-i18next";
import { useCookies } from "react-cookie";

import { withCookies, Cookies } from "react-cookie";
import { instanceOf } from "prop-types";

export default function ContactUs() {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [local, setLocal] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const handleChange = (event) => {
    console.log(event.target.id, "   ", event.target.value);
    if (event.target.id === "name") {
      setName(event.target.value);
    } else if (event.target.id === "email") {
      setEmail(event.target.value);
    } else if (event.target.id === "phone") {
      setPhone(event.target.value);
    } else if (event.target.id === "text") {
      setText(event.target.value);
    } else if (event.target.id === "local") {
      setLocal(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: name,
      email: email,
      phonenumber: phone,
      country_code: local,
      text: text,
    };

    axios.post(`example.com`, { user }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <div>
      <h1>Contact Us Form</h1>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control value={cookies.Name} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={cookies.Email}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="text">
          <Form.Label>Text</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={handleChange} />
        </Form.Group>

        <Form.Label>Choose Country</Form.Label>
        <Form.Row>
          <Form.Group controlId="local">
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

        <Button variant="primary" type="submit" onSubmit={handleSubmit}>
          Send
        </Button>
      </Form>
    </div>
  );
}
