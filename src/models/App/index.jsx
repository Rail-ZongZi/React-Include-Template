import React, { Component } from 'react';
import {Button} from "antd";

class Greeting extends Component{
  render() {
    return (
      <div>Greeting组件</div>
    )
  }
}

const Timer = (props) => {
  return (
    <div>
      Timer无状态组件（函数组件）
      <p>姓名：{props.Name}</p>
      <p>年龄：{props.Age}</p>
      <ul>
        {
          props.Itmes.map(item => <li key={item.id}>
            {item.city}
          </li>)
        }
      </ul>
    </div>
  )
};

class App extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      Age: 45
    }
  }
  onBtn = () => {
    this.setState({
      Age: this.state.Age + 10
    })
  };

  /**
   * 常用生命周期 -- 常用ajax请求
   */
  componentDidMount() {
    console.log("componentDidMount---挂载");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate---更新视图")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount--卸载");
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  // }
  //
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  // }

  render() {
    let itemList = [
      {
        id: "001",
        city: "江苏"
      },
      {
        id: '002',
        city: '四川'
      },
      {
        id: '003',
        city: '上海'
      }
    ];
    return (
      <div>
        <Timer Name={"粽子"} Age={this.state.Age} Itmes={itemList}/>
        <Button type="primary" onClick={this.onBtn}>点击年龄+1</Button>
        <Greeting/>
      </div>
    )
  }
}

export default App;
