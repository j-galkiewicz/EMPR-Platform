import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import LoginForm from "../Login/LoginForm";
import Footer from "../Footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../Home/Home";

const App = () => {
  return (
    <div className="XYZ">
      <div className="menu">


        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>

            <Header />  

            <Switch>
              <Route path="/login">
                <LoginForm />
              </Route>
              <Route path="/">

                <Home />
                
              </Route>
            </Switch>

            <Footer />
          </div>
        </Router>

      <h2>Login</h2>
        <Header>  
          <Menu />
        </Header>
         <LoginForm />
        <Footer />

      </div>
    </div>
  )
}


export default App;

