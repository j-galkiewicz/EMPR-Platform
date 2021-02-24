import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import LoginForm from "../Login/LoginForm";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div className="XYZ">
      <div className="menu">
        <Header>  
          <Menu />
        </Header>
         <LoginForm />
        <Footer />
      </div>
    </div>
  )
}

export default App;

