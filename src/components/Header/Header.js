import React from "react";
import HeartIcon from "../Icons/Icon";
import Button from "../Buttons/Button";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="top"> 
    <Menu />
    <Link to="/">
      <h1 className="platform-name"> 
        <div>
          <HeartIcon />
        </div>
          EMPR Platform
      </h1>
    </Link>
    <Button className="btnLogIn" name="Log in" />
  </header>
  );

export default Header;

