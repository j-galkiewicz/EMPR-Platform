import React, { useState } from "react";
import Button from "../Buttons/Button";
import "./_loginForm.scss";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  return (
    <div className="LoginForm">
    <h2 className="loginTitle">We've been waiting for you!</h2>
      <div className="flex">
        <form className="flex--formwraper">
          <label className="input--email">
            E-mail
            <input type="e-mail" 
              id="e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}>
            </input> 
          </label>
          <label className="input--password">
            Password
              <input type="password" id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}>
              </input>
          </label>
          <Button
            className="btnSubmit"
            type="submit"
            name="Come in"
            disabled={!validateForm()}
          />
        </form>
      </div>
    </div>
  )
}


