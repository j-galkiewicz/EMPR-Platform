import React from "react";
import HeartIcon from "../Icons/Icon";
import Loginbtn from "../Buttons/Loginbtn";

const Header = props => (
    <header className="top"> 
     <h1 className="platform-name"> 
        <div className="icon-heart"> <HeartIcon /></div>
            EMPR Platform
     </h1>
            <Loginbtn /> 
    </header>
);

export default Header;

