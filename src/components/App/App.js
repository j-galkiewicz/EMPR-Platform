import React , { useState } from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Login from "../Login/Login";
import Button from "../Buttons/Button";
import Controller from "../Controller/Controller";


const App = () => {
  const [name, setName] = useState('Adam')
  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="XYZ">
      <div className="menu">
        <p>{name}</p>
        <input type="text" onChange={handleChange} />
          <Header>  
            <div><Menu /></div>
            <Button />
          </Header>
          <Controller />
          <Login />
            <div>
            
            </div>
        </div>
      </div>
    );
  }

export default App;


