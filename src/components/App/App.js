import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Login from "../Login/Login";


class App extends React.Component {
  state = {
    name: 'Adam'
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  render() {
      return (
            <div className="XYZ">
              <div className="menu">
              <p>{this.state.name}</p>
              <input type="text" onChange={this.handleChange} />
                <Header>
                  <div><Menu /></div>
                </Header> 
                <Login />
              </div>
            </div>
          
      );
    }
}

export default App;


