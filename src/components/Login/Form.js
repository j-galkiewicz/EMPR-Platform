import React from "react";
import Button from "../Buttons/Button";



const Form = () => {
    return (
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
        <Button className="btnSubmit" type="submit">Come in</Button>

  
      </form>
      </div>
    );
}

export default Form;