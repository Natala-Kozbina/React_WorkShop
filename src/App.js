import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// создаем декоратор
// function bind(handleClick, thatThis) {
//     return handleClick.bind(thatThis);
// }
//
// app =  new App;
// app.handleClick = bind(app.handleClick, app);

class Child extends Component {
    componentWillMount() {
        console.log("componentWillMount Child");
    }
    componentDidMount() {
        console.log("componentDidMount Child");
    }
    componentWillReceiveProps() {
        console.log("componentWillReceiveProps Child");
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate Child");
        return true;
    }
    componentWillUpdate() {
        console.log("componentWillUpdate Child");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate Child");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount Child");
    }
    render () {
        console.log('Child');

        return (
            // <div>{this.props.text}</div>
            <div>{this.props.children}</div>
        )
    }
};

class App extends Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        // this.showChild = true;
        this.state = {
            showChild : false
        };
    }
    componentWillMount() {
        console.log("componentWillMount");
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    componentWillReceiveProps() {
        console.log("componentWillReceiveProps");
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }
    componentWillUpdate() {
        console.log("componentWillUpdate");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    // @bind
    handleClick() {
        console.log("handleClick", this);
        this.setState({
            showChild : !this.state.showChild
        });
        // return function () {
        //     console.log("handleClick function", this);
        // };
    }
    // handleClick = ()  => {
    //     console.log("handleClick", this);
    //     return function () {
    //         console.log("handleClick function", this);
    //     };
    // }

  render() {
      let child;
      console.log("this.state", this.state);
      if(this.state.showChild) {
          child = <Child className="xxx" text="Child text" />
      }
      console.log("render");
      return (
          <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 onClick={this.handleClick}>Welcome to React</h2>
            </div>
            {child}
            <Child>Text<span>Text</span></Child>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
    );
  }
}

export default App;
