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
      <Form >
      </Form>
    </div>
  );
}

