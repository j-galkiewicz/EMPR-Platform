import React from "react";
import Header from "../Header/Header";
import LoginForm from "../Login/LoginForm";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Geolocation from "../Geolocation/Geolocation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div className="XYZ">
      <div className="menu">
        <Router>
          <Header />
           <Switch>
           <Route path="/geolocation">
              <Geolocation />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/">
              <Home />
            </Route>
           </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  )
}

export default App;

