import React from 'react';


class Controller extends React.Component {
    //Q: can I use const[count] = useState(0) instead?
    state = { count: 0 }
    
  //setState to update state from 0 +
    increase = () => {
      this.setState({
        count: this.state.count + 1
      });
    }
    //setState to update state from 0 -
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