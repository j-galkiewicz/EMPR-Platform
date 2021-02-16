import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import LoginForm from "../Login/LoginForm";
import Button from "../Buttons/Button";

const App = () => {
  return (
    <div className="XYZ">
      <div className="menu">
        <Header>  
          <Menu />
          <Button />
        </Header>
        <LoginForm />
      </div>
    </div>
  )
}

export default App;

