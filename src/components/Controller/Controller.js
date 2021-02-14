import React from 'react';


class Controller extends React.Component {
    state = { count: 0 }
  
    increase = () => {
      this.setState({
        count: this.state.count + 1
      });
    }
  
    decrease = () => {
      this.setState({
        count: this.state.count - 1
      });
    }
    render() {
        return (
            <div>
              <button className="btn minus" onClick={this.decrease}>-</button>
              <span className="controllerNumber">{this.state.count}</span>
              <button className="btn plus" onClick={this.increase}>+</button>
            </div>
        )
      }
    }
    
export default Controller;