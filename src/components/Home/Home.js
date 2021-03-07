import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
        <div className="box--top"></div>
          <div className="box--1">
              <Link to="/geolocation" className="geolocation-link">MyGiving</Link>
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
