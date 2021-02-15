import React, { useState } from "react";
import Form from "./Form";
import Button from "../Buttons/Button";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
function validateForm() {
    return email.length > 0 && password.length > 0;
  }

function handleSubmit(e) {
  e.preventDefault();
}
  return (
    <div className="Login">
      <Form className="FormContainer" onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group  controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}

