import React from "react";
import HeartIcon from "../Icons/Icon";
import LoginHeader from "../Buttons/LoginHeader";

const Header = props => (
    <header className="top"> 
     <h1 className="platform-name"> 
        <div className="icon-heart"> <HeartIcon /></div>
            EMPR Platform
     </h1>
            <LoginHeader /> 
    </header>
);

export default Header;

