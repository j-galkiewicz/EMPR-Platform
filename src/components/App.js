import React from "react";
import Header from "./Header";
import Menu from "./Menu";


//import AlignItems from "./AlignItems";


class App extends React.Component {
  render() {
      return (
          <div className="XYZ">
          <div className="menu">
          <Header>

            <div><Menu /></div>
          </Header>

          </div>

          </div>
  
      );
  }
}


export default App;


