import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import LoginForm from "../Login/LoginForm";

const App = () => {
  return (
    <div className="XYZ">
      <div className="menu">
        <Header>  
          <Menu />
        </Header>
        <LoginForm />
      </div>
    </div>
  )
}

export default App;

