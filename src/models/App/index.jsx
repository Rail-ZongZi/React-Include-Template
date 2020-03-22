import React, { Component } from 'react';
import './index.scss';
// import Timer from '../Timer/index.jsx'

// function Timer(props) {
// return <h2>Hello, {props.name}</h2>
// }

class Timer extends Component {
  render() {
    return (
      <h2>Hello, {this.props.name}</h2>
    )
  }
}

const numbers = [21, 34, 45, 89, 100]

class App extends Component {
  render() {
    function onBtn() {
      alert("点击按钮...")
    }
    return (
      <div className={"title"}>
        <Timer name="Yello" />
        <Timer name="Color" />
        <Timer name="Sollow" />
        <ul>
          {
            numbers.map((item, key) => <li key={key}>{item * 3}</li>)
          }
        </ul>
        <button onClick={onBtn}>点击按钮</button>
        <i className={"iconfont icon-error1"}></i>
      </div>
    )
  }
}

export default App;
