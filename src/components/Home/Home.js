import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
        <div className="home--top"></div>
          <div className="home--myGiving">
              <Link to="/geolocation" class="home--myGiving-title">MyGiving</Link>
          </div>
          <div className="home--mySupport">
              MySupport
          </div>
          <div className="home--myKnowledge">
              MyKnowledge
          </div>
        <div className="home--bottom"></div>
    </div>
  )
}
export default Home;
