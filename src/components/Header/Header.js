import React from "react";
import HeartIcon from "../Icons/Icon";
import Button from "../Buttons/Button";
import Menu from "../Menu/Menu";

const Header = () => (
  <header className="top"> 
  <Menu />
    <h1 className="platform-name"> 
  
      <div>
        <HeartIcon />
      </div>
        EMPR Platform
      </h1>
     
    <Button className="btnLogIn" name="Log in" />
  </header>
  );

export default Header;
