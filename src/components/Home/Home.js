import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
        <h2>HOME</h2>
        <div className="box--top"></div>
          <div className="box--1">
              MyGiving
          </div>
          <div className="box--2">
              MySupport
          </div>
          <div className="box--3">
              MyKnowledge
          </div>
        <div className="box--bottom"></div>
    </div>
  )
}

export default Home;
