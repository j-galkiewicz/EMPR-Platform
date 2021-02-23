import React from "react";
import HeartIcon from "../Icons/Icon";
import Button from "../Buttons/Button";

const Header = () => (
    <header className="top"> 
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
