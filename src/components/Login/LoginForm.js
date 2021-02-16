import React, { useState } from "react";
import Button from "../Buttons/Button";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  return (
    <div className="LoginForm">
      <div className="flex">
        <form className="flex--Formwraper">
          <label className="input--email">
            E-mail
            <input type="e-mail"></input>
          </label>
          <label className="input--password">
            Password
            <input type="password"></input>
          </label>
          <Button
            className="btnSubmit"
            type="submit"
            name="Come in"
          />
        </form>
      </div>
    </div>
  )
}


