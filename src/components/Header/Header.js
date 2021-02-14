import React from "react";
import HeartIcon from "../Icons/Icon";
import Button from "../Buttons/Button";

const Header = props => (
    <header className="top"> 
    <h1 className="platform-name"> 
      <div>
        <HeartIcon />
      </div>
        EMPR Platform
        </h1>
      <Button className="buttonLogIn"
        name="Log in"
        type="success"
      />
      <Button className="buttonLogOff"
        name="Log off"
        type="error"
      />
    </header>
  );

export default Header;
